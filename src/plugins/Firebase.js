import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

/**
 * You can read more about Firebase setup here
 * https://firebase.google.com/docs/web/setup
 */

const config = {
  apiKey: '{your-project-api-key}',
  authDomain: '{your-project-id}.firebaseapp.com',
  databaseURL: 'https://{your-project-id}.firebaseio.com',
  projectId: '{your-project-id}',
  storageBucket: '{your-project-id}.appspot.com',
  messagingSenderId: '{your-message-sender-id}',
};

firebase.initializeApp(config);
/**
 * remove if you dont want to use local Firestore Auth
 * or update like you ish
 * read more: https://firebase.google.com/docs/auth/web/auth-state-persistence
 */
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

firebase.firestore().settings({ timestampsInSnapshots: true });

/**
 * remove if you dont want to use local Firestore persistence
 * read more: https://firebase.google.com/docs/firestore/manage-data/enable-offline
 */
firebase.firestore().enablePersistence();

/**
 * Add your Firebase features as you need
 * Use Vue prototype to have access to these features
 * in any part of your code
 */
export default ({ Vue }) => {
  Vue.prototype.$firebase = firebase;
  Vue.prototype.$firestore = firebase.firestore();
};
