import { createApp } from 'vue'
import firebase from "firebase/app"
import "firebase/auth"
import App from './App.vue'
import router from "./router"
import authStore, { authStoreKey } from "./stores/auth"

const config = {
  apiKey: "AIzaSyDkKQh3tpRIDYH3aWgBO3wPKvHlgEFv0Wo",
  authDomain: "vue3-firebase-demo-3a6dd.firebaseapp.com",
  projectId: "vue3-firebase-demo-3a6dd",
  storageBucket: "vue3-firebase-demo-3a6dd.appspot.com",
  messagingSenderId: "372742142686",
  appId: "1:372742142686:web:63984fed3798b432b8e04f"
}

firebase.initializeApp(config)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

createApp(App)
  .use(router)
  .provide(authStoreKey, authStore())
  .mount('#app')
