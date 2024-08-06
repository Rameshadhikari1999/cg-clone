import React from 'react';

import Main from './components/layout/Main';
import Navbar from './components/layout/Navbar';

const App = () => {
  return (
    <main className='w-full h-screen underline bg-primary '>
        <header>
          <Navbar/>
        </header>
        <section>
          <Main/>
        </section>
    </main>
  )
}

export default App
