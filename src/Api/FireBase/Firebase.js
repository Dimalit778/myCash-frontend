import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';

import { app } from 'init_firebase';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(); // google authentication
const FacebookProvider = new FacebookAuthProvider(); // facebook authentication

export const GoogleAuth = async () => {
  try {
    const userAuth = await signInWithPopup(auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(userAuth);
    //   const token = credential.accessToken;
    const { user } = userAuth;

    console.log(credential);
    return userAuth;
  } catch (error) {
    console.log(error);
  }
};
export const FacebookAuth = async () => {
  try {
    const fbAuth = signInWithPopup(auth, FacebookProvider);
    return fbAuth;
  } catch (error) {
    console.log(error);
  }
};
