import React from "react";
import Navbar from './components/Navbar'
import Chat from './components/Chat'
import './index.css'

import { auth } from './Firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

function App() {
  const [user] = useAuthState(auth)

  const styles = {
    container: `text-center max-w-[728px] mx-auto`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
  }

  return (
    <div className={styles.container}>
      <section className={styles.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
