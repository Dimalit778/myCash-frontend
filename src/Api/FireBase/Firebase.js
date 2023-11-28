import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  // FacebookAuthProvider,
} from 'firebase/auth';

import { app } from 'init_firebase';

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider(); // google authentication
//const FacebookProvider = new FacebookAuthProvider(); // facebook authentication

export const GoogleAuth = async () => {
  try {
    const data = await signInWithPopup(auth, GoogleProvider);
    const userData = data._tokenResponse;
    return userData;
  } catch (error) {
    console.log(error);
  }
};
// export const FacebookAuth = async () => {
//   try {
//     const fbAuth = signInWithPopup(auth, FacebookProvider);
//     return fbAuth;
//   } catch (error) {
//     console.log(error);
//   }
// };
