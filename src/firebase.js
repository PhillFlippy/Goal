import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCcAKzJL4JyKUhpw7MXhWQW2avgGrFhUXg",
    authDomain: "goalcoach-9a5aa.firebaseapp.com",
    databaseURL: "https://goalcoach-9a5aa.firebaseio.com",
    storageBucket: "goalcoach-9a5aa.appspot.com",
    messagingSenderId: "217042219130"
  };
export const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');

export const completeGoalRef = firebase.database().ref('completeGoals');
