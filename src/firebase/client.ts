import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQu96F7JwPu7MRVTDFvJWE4Z82gCdtdvs",
  authDomain: "astro-sos.firebaseapp.com",
  projectId: "astro-sos",
  storageBucket: "astro-sos.appspot.com",
  messagingSenderId: "66213182291",
  appId: "1:66213182291:web:4545cd964440b56578ffa6",
  measurementId: "G-10XQQZV1LQ"
};

export const app = initializeApp(firebaseConfig);
