import React from 'react'
import { useHistory } from 'react-router-dom'

////////////////////////////////////////////////////
//  NAVIGATION BAR COMPONENT
////////////////////////////////////////////////////

const NavBar = (props) => {
    // //// VARIABLES //////////////////////////////
    const history = useHistory();

    // //// UTILITY FUNCTIONS //////////////////////

    const resetLocToHome = (e) => {
        e.preventDefault();
        props.setNewLocation("Home");
        history.push("/")
    } 

    // //// OUTPUT /////////////////////////////////
    return (
        <header>
            <div className='navbar navbar-dark bg-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <h2 className='text-light' 
                        onClick={ resetLocToHome }>
                        <strong className='text-warning'>Cipher</strong><strong>MyDoc</strong>
                    </h2>
                    {/* **** Link to The Root of the Site ******** */}
                    <button className='btn btn-sm btn-location'
                        onClick={ resetLocToHome } >
                        <strong>Home</strong>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar