import NavBar from './components/NavBarComp';
import './App.css';
import {Switch, Route} from 'react-router-dom';

////////////////////////////////////////
// App.js
////////////////////////////////////////

function App() {
  return (
    <main className='bg'>
      {/* *** Nav Bar Component *** */}
      <NavBar />
      <Switch>
        <div className="container mt-4">
          <div className="row bg-white p-3 round">
            <div className="col">
              {/* **** Home Route ******** */}
              <Route exact path="/">
                {/* <HomeComp /> */}
                <h1>Hello World</h1>
              </Route>
              <Route exact path="/anotherpage">
                {/* <HomeComp /> */}
                <h1>This is another page</h1>
              </Route>
              {/* **** Root Redirect to Home ******** */}
              {/* <Route path="/">
                <div >
                  <Redirect to="/home" />
                </div>
              </Route> */}
            </div>
          </div>
        </div>
      </Switch>
    </main>
  );
}

export default App;
