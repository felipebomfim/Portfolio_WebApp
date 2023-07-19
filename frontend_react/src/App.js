import React from 'react';
import { About, Footer, Header, Projects, Skills } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Header> </Header>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;