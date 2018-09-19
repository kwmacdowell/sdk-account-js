/**
 * @Author: XY | The Findables Company <arietrouw>
 * @Date:   Wednesday, March 7, 2018 11:24 AM
 * @Email:  developer@xyfindables.com
 * @Filename: xyo-account.js
 * @Last modified by:   arietrouw
 * @Last modified time: Tuesday, April 17, 2018 8:32 PM
 * @License: All Rights Reserved
 * @Copyright: Copyright XY | The Findables Company
 */

/* eslint no-console: 0 */
/* eslint max-len: 0 */
/* eslint camelcase: 0 */
/* eslint class-methods-use-this: 0 */

import firebase from 'firebase'

class XYAccount {
  constructor (_onStateChange) {
    console.log(`XYAccount constructor`)
    const config = {
      apiKey: `AIzaSyCCtXYmkLd3gh6fKjSCGOWhsYoeKccYq-g`,
      authDomain: `xyo-network-1522800011804.firebaseapp.com`,
      databaseURL: `https://xyo-network-1522800011804.firebaseio.com`,
      projectId: `xyo-network-1522800011804`,
      storageBucket: `xyo-network-1522800011804.appspot.com`,
      messagingSenderId: `542704523793`
    }
    this.app = firebase.initializeApp(config)
    if (_onStateChange) {
      firebase.auth().onAuthStateChanged(_onStateChange)
    }
  }

  record (_event) {
  }

  currentUser () {
    return firebase.auth().currentUser
  }

  async sendPasswordResetEmail (email) {
    await firebase.auth(this.app).sendPasswordResetEmail(email)
  }

  async signUp (_email, _password) {
    await firebase.auth().createUserWithEmailAndPassword(_email, _password)
  }

  async signIn (_email, _password) {
    await firebase.auth().signInWithEmailAndPassword(_email, _password)
  }

  async signOut () {
    return firebase.auth().signOut()
  }

  async updatePassword (_password) {
    return this.currentUser().updatePassword(_password)
  }

  async signInWithFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  async signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    await firebase.auth().signInWithPopup(provider)
  }

  isSignedIn () {
    return firebase.auth().currentUser != null
  }
}

export default XYAccount
