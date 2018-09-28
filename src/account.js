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

export default class XYAccount {
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

    this.firebase = firebase

    if (!this.firebase.apps.length) {
      this.app = this.firebase.initializeApp(config)
    } else {
      this.app = this.firebase.apps[0]
    }

    if (_onStateChange) {
      this.firebase.auth().onAuthStateChanged(_onStateChange)
    }
  }

  record (_event) {
  }

  currentUser () {
    return this.firebase.auth().currentUser
  }

  async sendPasswordResetEmail (email) {
    await this.firebase.auth(this.app).sendPasswordResetEmail(email)
  }

  async signUp (_email, _password) {
    await this.firebase.auth().createUserWithEmailAndPassword(_email, _password)
  }

  async signIn (_email, _password) {
    await this.firebase.auth().signInWithEmailAndPassword(_email, _password)
  }

  async signOut () {
    await this.firebase.auth().signOut()
  }

  async updatePassword (_password) {
    await this.currentUser().updatePassword(_password)
  }

  async signInWithFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider()
    await this.firebase.auth().signInWithPopup(provider)
  }

  async signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    await this.firebase.auth().signInWithPopup(provider)
  }

  isSignedIn () {
    return this.firebase.auth().currentUser != null
  }
}
