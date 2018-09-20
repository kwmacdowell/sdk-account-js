import chai from 'chai'
import XYAccount from '../src/account.js'

// Tell chai that we'll be using the "should" style assertions.
chai.should()

// Import the XYAccount class.
const xya = new XYAccount()

describe(`XYAccount`, () => {
  describe(`#signIn`, () => {
    it(`should be signed in`, async () => {
      await xya.signIn(`arie.trouw@xyfindables.com`, `abc123`)
      xya.isSignedIn().should.equal(true)
    })
  })
})
