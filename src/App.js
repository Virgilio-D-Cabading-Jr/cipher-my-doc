import './App.css';
import {React, useState} from 'react';
import NavBar from './components/NavBarComp';
import ActionBar from './components/ActinonBarComp';

////////////////////////////////////////
// App.js
////////////////////////////////////////

function App() {
  // //// VARIABLES //////////////////////////////
  const [location, setLocation] = useState("notHome");

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
      <ActionBar />

      <div className="container mt-4">
        <div className="row bg-white p-3 round">
          <div className="col">
            {
              location === "Home"
              ? <h1>I'm Home</h1>
              : <h1>I'm not home</h1>
            }
            <p>Hello Test</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
