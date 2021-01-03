import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  containerMenu: { flexDirection: 'row' },
  menu: { marginHorizontal: 8 },
  containerIcon: { borderWidth: 1, padding: 4, borderRadius: 6, alignSelf: 'center' },
});

function HomeContent() {
  const navigation = useNavigation();
  const onPressMenu = (menuId:  'Budget' | 'Transaction' | 'Wallet') => {
    navigation.navigate(menuId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <TouchableOpacity onPress={() => onPressMenu('Budget')} activeOpacity={.8} style={styles.menu}>
          <Icon type="font-awesome-5" name="book" containerStyle={styles.containerIcon} />
          <Text>{'Anggaran'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressMenu('Transaction')} activeOpacity={.8} style={styles.menu}>
          <Icon type="font-awesome-5" name="receipt" containerStyle={styles.containerIcon} />
          <Text>{'Transaksi'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressMenu('Wallet')} activeOpacity={.8} style={styles.menu}>
          <Icon type="font-awesome-5" name="wallet" containerStyle={styles.containerIcon} />
          <Text>{'Rekening'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeContent;
