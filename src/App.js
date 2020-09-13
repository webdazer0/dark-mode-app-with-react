import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import CardList from './component/CardList';
import Overview from './component/Overview';
import Switch from './component/Switch';

// const checkbox = document.querySelector('#checkbox')
// if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   checkbox.setAttribute('checked', true);
// }


function App() {

  const [ checked, setChecked ] = useState(false);
  const [ darkMode, setDarkMode ] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode';
  

  useEffect(() => {
    setDarkMode(true);
    setChecked(true);
    // console.log('ciao da useeffect');
  }, []);

  return (
    <main className={mainClass}>
        <Header>
          <Switch 
            checked={checked} 
            setChecked={setChecked} 
            setDarkMode={setDarkMode} 
          />
        </Header>
        <CardList />
        <Overview />
    </main>
  );
}

export default App;
