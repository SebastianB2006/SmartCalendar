# 📅 Smart Calendar

This is a mobile application built with [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), and Firebase Firestore. It provides an interactive calendar interface where users can select dates and save daily events directly to a cloud database.

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Clone the repository and install dependencies

Download the code and install all the required packages (including `react-native-calendars` and `firebase`):

```bash
npm install
```

### 2. ⚠️ Firebase Configuration (CRITICAL STEP)

For security reasons, the Firebase API keys are **not** included in this repository. If you try to run the app right now, it will crash because it cannot find the configuration file.

To fix this, you must connect your own Firebase project:

1. Create a new file named `firebaseConfig.js` in the root folder of the project (next to `package.json` and `app.json`).
2. Add your own Firebase credentials inside it, using the following format:

```javascript
// firebaseConfig.js
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
*(Make sure Firestore Database is enabled in your Firebase Console and the security rules allow reading/writing).*

### 3. Start the app

Once the Firebase config is ready, start the development server:

```bash
npx expo start
```

- Press **`w`** in the terminal to open the app in your web browser.
- Use the **Expo Go** app on your iOS or Android device to scan the QR code and test on your phone.
