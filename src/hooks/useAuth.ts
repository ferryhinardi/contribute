import { useState, useEffect } from 'react';
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

function useAuth() {
  const [initializing, setInitializing] = useState(true);
  const [confirm, setConfirm] = useState<FirebaseAuthTypes.ConfirmationResult>();
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId: '250364316517-t02v4c9opkvrbvobedi07hem939v0fkt.apps.googleusercontent.com',
      offlineAccess: true
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      // Get the users ID token
      const user = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
        console.log('Other Error...', JSON.stringify(error));
      }
    }
  };
  async function signInWithPhoneNumber(phoneNumber: string) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }
  async function confirmCode(code: string) {
    try {
      await confirm?.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  const signOut = async () => {
    const res = await auth().signOut();
    return res;
  };

  return {
    initializing,
    user,
    signInWithGoogle,
    signInWithPhoneNumber,
    confirmCode,
    signOut,
  };
}

export default useAuth;
