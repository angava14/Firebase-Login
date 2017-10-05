import * as  firebase from 'firebase'

  var config = {
    apiKey: "AIzaSyD_f4cn9bOHL6bGDTPEY6bOUnuRUqgvFfM",
    authDomain: "react-firebase-77998.firebaseapp.com",
    databaseURL: "https://react-firebase-77998.firebaseio.com",
    projectId: "react-firebase-77998",
    storageBucket: "react-firebase-77998.appspot.com",
    messagingSenderId: "152747011608"
  };
  firebase.initializeApp(config);
export const fire = firebase.storage();


const ref = firebase.database().ref()
const firebaseAuth = firebase.auth

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function verify(){
  return firebaseAuth().currentUser.getToken(true);
}