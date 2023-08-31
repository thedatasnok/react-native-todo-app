import { initializeApp } from 'firebase/app';
import Constants from 'expo-constants';

const manifest = Constants.expoConfig?.extra?.firebase;

const firebaseConfig = {
  apiKey: manifest?.apiKey,
  authDomain: manifest?.authDomain,
  projectId: manifest?.projectId,
  storageBucket: manifest?.storageBucket,
  messagingSenderId: manifest?.messagingSenderId,
  appId: manifest?.appId,
};

export const firebase = initializeApp(firebaseConfig);
