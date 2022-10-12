import  'firebase/firestore'

// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true, merge: true};

const config = {
  apiKey: "AIzaSyDto1_Y75PCK02VjDQ_RoKymZh5VEvefrs",
  authDomain: "gestor-usuario-362520.firebaseapp.com",
  projectId: "gestor-usuario-362520",
  databaseURL: "https://gestor-usuario-362520-default-rtdb.firebaseio.com/",
  storageBucket: "gestor-usuario-362520.appspot.com",
  messagingSenderId: "895940316308",
  appId: "1:895940316308:web:2f6ea01edf6976274bf881",
  measurementId: "G-K2P97PJ8ZG"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

const conexion = firebase.firestore()
export default {
    firebase,
    conexion,
}
