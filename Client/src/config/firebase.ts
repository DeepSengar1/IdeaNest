import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For development, we'll initialize Firebase without actual credentials
// In production, these would be replaced with real Firebase config values
const firebaseConfig = {
  apiKey: 'demo-api-key',
  authDomain: 'demo-project.firebaseapp.com',
  projectId: 'demo-project',
  storageBucket: 'demo-project.appspot.com',
  messagingSenderId: '123456789',
  appId: '1:123456789:web:abcdef123456'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);