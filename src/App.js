import NavBar from './components/NavBarComp';
import './App.css';
import {React, useState} from 'react';

////////////////////////////////////////
// App.js
////////////////////////////////////////

function App() {
    // //// VARIABLES //////////////////////////////
    const [location, setLocation] = useState("NotHome");


  // //// OUTPUT /////////////////////////////////
  return (
    <main className='bg'>
      {/* *** Nav Bar Component *** */}
      <NavBar />
        <div className="container mt-4">
          <div className="row bg-white p-3 round">
            <div className="col">
              {/* **** Home Route ******** */}
              {/* <HomeComp /> */}
              {
                (location === "Home")
                  ? <h1>Hello World I'm at Home</h1>
                  : <h1>Sorry I'm not home</h1>
              }
            </div>
          </div>
        </div>
    </main>
  );
}

export default App;
