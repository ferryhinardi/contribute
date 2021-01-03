import React, { useRef, useState } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import PhoneInput from 'react-native-phone-number-input';
import { showMessage } from 'react-native-flash-message';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import useAuth from '../hooks/useAuth';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  codeFieldRoot: {
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  wrapperButton: { marginTop: 16 },
});
const CELL_COUNT = 6;

function PhoneNumberAuth() {
  const [animatedValueHeight] = useState<Animated.Value>(new Animated.Value(0));
  const phoneInputRef = useRef<PhoneInput>(null);
  const [confirmCodeValue, setConfirmCodeValue] = useState<string>();
  const confirmCodeRef = useBlurOnFulfill({ value: confirmCodeValue, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: confirmCodeValue,
    setValue: setConfirmCodeValue,
  });
  const { signInWithPhoneNumber } = useAuth();
  const onSubmit = async () => {
    const phoneNumber = phoneInputRef.current?.getNumberAfterPossiblyEliminatingZero();

    if (phoneNumber?.number === '') {
      showMessage({ message: 'Please Enter Phone Number', type: 'danger' });
      return;
    }

    if (phoneNumber?.formattedNumber) {
      Animated.timing(animatedValueHeight, { toValue: 60, duration: 500, useNativeDriver: true }).start();
      // await signInWithPhoneNumber(phoneNumber?.formattedNumber);
    }
  };

  return (
    <View style={styles.container}>
      <PhoneInput ref={phoneInputRef} defaultCode="ID" />
      <Animated.View
          style={{
            height: animatedValueHeight.interpolate({
              inputRange: [0, 25, 50, 75, 100],
              outputRange: [0, .5, 0.75, 0.9, 1]
            }),
          }}
      >
        <CodeField
          ref={confirmCodeRef}
          {...props}
          value={confirmCodeValue}
          onChangeText={setConfirmCodeValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <View
              key={index}
              style={[styles.cellRoot, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            </View>
          )}
        />
      </Animated.View>
      <View style={styles.wrapperButton}>
        <Button title="Submit" onPress={onSubmit} />
      </View>
    </View>
  );
}

export default PhoneNumberAuth;
