import NavBar from './components/NavBarComp';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

////////////////////////////////////////
// App.js
////////////////////////////////////////

function App() {
  return (
    <main>
      {/* *** Nav Bar Component *** */}
      <NavBar />
      <Switch>
        <div className="container mt-4">
          <div className="row bg-white p-3 round">
            <div className="col">
              {/* **** Home Route ******** */}
              <Route exact path="/home">
                {/* <HomeComp /> */}
                <h1>Hello World</h1>
              </Route>
              {/* **** Root Redirect to Home ******** */}
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </div>
          </div>
        </div>
      </Switch>
    </main>
  );
}

export default App;
