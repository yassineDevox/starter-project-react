import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {

   apiKey: "AIzaSyCw6qwkvfu0XgtS34Kvm78WDR2BAeZlrjY",
  authDomain: "test-b2acd.firebaseapp.com",
  databaseURL: "https://test-b2acd-default-rtdb.firebaseio.com",
  projectId: "test-b2acd",
  storageBucket: "test-b2acd.appspot.com",
  messagingSenderId: "399424641395",
  appId: "1:399424641395:web:0f689a3df4f1353c0acd06"
    
 };


// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();