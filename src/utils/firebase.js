import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {};


// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();