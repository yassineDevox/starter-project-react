import firebase from 'firebase/app'
import 'firebase/auth';

// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyCQjKe3lYR03ZtWKIFzqtKhcGYzIhUfOnk",
   authDomain: "lms-project-492bf.firebaseapp.com",
   databaseURL: "https://lms-project-492bf-default-rtdb.firebaseio.com",
   projectId: "lms-project-492bf",
   storageBucket: "lms-project-492bf.appspot.com",
   messagingSenderId: "754517988569",
   appId: "1:754517988569:web:d1c59640678e6e70f15ac8"
 };


// Initialize Firebase  
const app = firebase.initializeApp(firebaseConfig);  
  
//exporter notre base de données
export default app; 
//export the auth app
export const auth = app.auth();