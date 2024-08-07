import React from 'react';

import Main from './components/layout/Main';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <main className='w-screen overflow-x-hidden bg-primary text-tertiary '>
        <header className='w-full fixed top-0 left-0'>
          <Navbar/>
        </header>
        <section>
          <Main/>
        </section>
    </main>
  )
}

export default App
