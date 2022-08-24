import './App.css';
import {React, useState} from 'react';
import NavBar from './components/NavBarComp';
import ActionBar from './components/ActinonBarComp';

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
      <NavBar />
      {/* *** Action Bar Component *** */}
      <ActionBar setNewLocation={ setNewLocation } />

      <div className="container mt-4">
        <div className="row bg-white p-3 round">
          <div className="col">
            {
              location === "Home"
              ? <div>
                  <h1>I'm Home</h1>
                  <p>Location: { location }</p>
                </div>
              : <div>
                  <h1>I'm NOT Home</h1>
                  <p>Location: { location }</p>
                </div>
            }
            <p>Hello Test</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
