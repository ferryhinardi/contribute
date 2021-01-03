import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import HomeContent from './HomeContent';
import useAuth from '../hooks/useAuth';
import { HomeScreenNavigationProp } from '../../types';

const styles = StyleSheet.create({
  sideOffset: { marginVertical: 8 },
});

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const { user, signInWithGoogle, signOut } = useAuth();
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user ? <Text style={styles.sideOffset}>{`Welcome, `}<Text h4 h4Style={{ fontSize: 16 }}>{user?.displayName}</Text></Text> : null}
      {!user ? (
        <>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signInWithGoogle}
          />
        </>
      ): (
        <>
          <HomeContent />
          <Button
            title="Sign out"
            onPress={signOut}
            style={styles.sideOffset}
          />
        </>
      )}
    </SafeAreaView>
  );
}

export default HomeScreen;