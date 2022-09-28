import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../Firebase'

const styles = {
    signing: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}


function SignIn() {
  return (
    <div className={styles.signing}>
        <GoogleButton  onClick={googleSignIn}/>
    </div>
  )
}

export default SignIn