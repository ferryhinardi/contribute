import React from 'react';
import { View, Text, Button } from 'react-native';
import { GoogleSigninButton } from '@react-native-community/google-signin';
import useAuth from '../hooks/useAuth';
import { HomeScreenNavigationProp } from '../../types';

function HomeScreen({ navigation }: { navigation: HomeScreenNavigationProp }) {
  const { user, signInWithGoogle, signOut } = useAuth();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user ? <Text>{`Welcome, ${user?.displayName}`}</Text> : <Text>Home Screen</Text>}
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
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
          <Button
            title="Sign out"
            onPress={signOut}
          />
        </>
      )}
    </View>
  );
}

export default HomeScreen;