import React from 'react';
import { About, Footer, Header, Projects, Skills, Contact } from './container';
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
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;