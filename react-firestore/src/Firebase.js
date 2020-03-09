import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBmdkmf5RXGkkCbW5xE5pDVDecpdym6Yqs",
    authDomain: "fir-crud-2123d.firebaseapp.com",
    databaseURL: "https://fir-crud-2123d.firebaseio.com",
    projectId: "fir-crud-2123d",
    storageBucket: "fir-crud-2123d.appspot.com",
    messagingSenderId: "927011067478",
    appId: "1:927011067478:web:60f964744f046fe9548df7",
    measurementId: "G-7TCLGE8CEW"
};
// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
