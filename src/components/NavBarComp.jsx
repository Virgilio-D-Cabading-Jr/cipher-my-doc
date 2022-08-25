import React from 'react'
import { useHistory } from 'react-router-dom'

////////////////////////////////////////////////////
//  NAVIGATION BAR COMPONENT
////////////////////////////////////////////////////

const NavBar = (props) => {
    const history = useHistory();

    const resetLocToHome = (e) => {
        e.preventDefault();
        props.setNewLocation("Home");
        history.push("/")
    } 

    return (
        <header>
            <div className='navbar navbar-dark bg-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <h2 className='text-light'>
                        <strong className='text-warning'>Cipher</strong><strong>MyDoc</strong>
                    </h2>
                    {/* **** Link to The Root of the Site ******** */}
                    <button className='btn btn-sm btn-info round-btn'
                        onClick={ resetLocToHome } >
                        <strong>Home</strong>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar