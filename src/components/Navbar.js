import React from 'react';
import SignIn from './SignIn'
import LogOut from './LogOut'

import {auth} from '../Firebase';
import {useAuthState} from 'react-firebase-hooks/auth';


const styles = {
    header: `flex flex-row justify-between p-5 bg-gradient-to-r from-cyan-200 via-blue-200 to-blue-600 box-border`,
    appName: `text-4xl cursor-pointer text-blue-900 hover:scale-125 hover:px-3`,
    search: `placeholder: italic placeholder: text-slate-400 rounded-3xl w-1/3 placeholder: pl-5`
}

function Navbar() {
  const [user] = useAuthState(auth)
  console.log(user)
  return (
    <div className={styles.header}>
        <h1 className={styles.appName}>Donton</h1>
        {user ? <LogOut /> : <SignIn />}
        {/* <input type="text" name="search" className={styles.search} placeholder="Search someone..." /> */}
    </div>
  )
}

export default Navbar