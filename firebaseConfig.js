import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
} from "@env";

export const firebaseConfig = {
  appId: FIREBASE_APP_ID,
  projectId: FIREBASE_PROJECT_ID,
  apiKey: FIREBASE_API_KEY,
  databaseURL: '',
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
};
