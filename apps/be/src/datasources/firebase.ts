import { environment } from '@/helpers';
import { initializeApp } from 'firebase-admin/app';
import { getStorage } from 'firebase-admin/storage';

const firebaseConfig = {
  apiKey: environment.get('APP_ENV_FIREBASE_API_KEY'),
  authDomain: environment.get('APP_ENV_FIREBASE_AUTH_DOMAIN'),
  projectId: environment.get('APP_ENV_FIREBASE_PROJECT_ID'),
  storageBucket: environment.get('APP_ENV_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: environment.get('APP_ENV_FIREBASE_MESSAGING_SENDER_ID'),
  appId: environment.get('APP_ENV_FIREBASE_APP_ID'),
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const bucket = getStorage().bucket();
