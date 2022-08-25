import './App.css';
import {React, useState} from 'react';
import NavBar from './components/NavBarComp';
import ActionBar from './components/ActinonBarComp';
import MainDisplay from './components/MainDisplayComp';

////////////////////////////////////////
// App.js
////////////////////////////////////////

function App() {
  // //// VARIABLES //////////////////////////////
  const [location, setLocation] = useState("Home");

  // //// CALL BACK FUNCTIONS ////////////////////

  const setNewLocation = (newLocation) => {
    setLocation(newLocation);
  }

  // //// OUTPUT /////////////////////////////////
  return (
    <main className='bg'>
      {/* *** Nav Bar Component *** */}
      <NavBar  setNewLocation={ setNewLocation } />
      {/* *** Action Bar Component *** */}
      <ActionBar location={ location } setNewLocation={ setNewLocation } />

      {/* *** Main Display Component */}
      <MainDisplay location= {location} />
    </main>
  );
}

export default App;
