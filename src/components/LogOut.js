import React from 'react'
import {auth} from '../Firebase'

const styles = {
    appButt: `bg-red-300 px-4 pt-3 pb-3 hover:bg-gray-100 rounded-2xl font-bold shadow-lg shadow-black cursor-pointer`
}

function LogOut() {
    
    const signOut = () => {
    signOut(auth)
 }
 
  return (
    <div className={styles.appButt}>
        <button onClick={() => auth.signOut()}>
            Logout</button>
    </div>
  )
}

export default LogOut