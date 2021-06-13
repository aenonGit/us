import firebase from 'firebase/app';
import 'firebase/analytics';


/**
 * Retrives the Firebase config for Holocom based on the NODE_ENV.
 * This allows to filter out debug events from the Firebase Console
 */
const getFirebaseConfig = () => {
  if (process.env.NODE_ENV === 'development') {
    return {
      apiKey: "AIzaSyAWQ6VRcKBRlHKusC0qS8o4tbwE_btnhEk",
      authDomain: "eg-wedding.firebaseapp.com",
      projectId: "eg-wedding",
      appId: "1:818776555066:web:a0123e5aafb8ec04fd3f03",
      measurementId: "G-S7883RW60Q"
    };
  } else {
    return {
      apiKey: "AIzaSyAWQ6VRcKBRlHKusC0qS8o4tbwE_btnhEk",
      authDomain: "eg-wedding.firebaseapp.com",
      projectId: "eg-wedding",
      appId: "1:818776555066:web:408e690a6978c62bfd3f03",
      measurementId: "G-T6Y3X3MMRW"
    };
  }
};

/**
 * Initializes the Firebase Analitics service
 */
export function initFirebaseAnalytics(): void {
  firebase.initializeApp(getFirebaseConfig());
}


/**
 * Logs an event to the firebase analytics console
 *
 * The full list of events can be found in the holocom client wiki. But more can be added.
 *
 * The list of custom attributes, must be explicitly defined in the firebase console,
 * and those already defined can be found in the aforementioned wiki and in the console under "Custom Definitions"
 *
 * @param eventName The name of the event.
 * @param eventParams Custom dimension/metric associated with the event. It is just an optional object with kv pairs.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logEvent(eventName: string, eventParams?: { [key: string]: any } | undefined): void {
  // Should we retrieve the analytics service once and store it in a singleton instead of doing it everytime?
  firebase.analytics().logEvent(eventName, eventParams);
}
