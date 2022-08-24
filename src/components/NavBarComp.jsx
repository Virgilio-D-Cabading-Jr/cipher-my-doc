import React from 'react'
import { Link } from 'react-router-dom'

////////////////////////////////////////////////////
//  NAVIGATION BAR COMPONENT
////////////////////////////////////////////////////

const NavBar = () => {
    return (
        <header>
            <div className='navbar navbar-dark bg-dark box-shadow'>
                <div className='container d-flex justify-content-between'>
                    {/* **** Site Title ******** */}
                    <h2 className='text-light'>
                        <strong className='text-warning'>Cipher</strong><strong>MyDoc</strong>
                    </h2>
                    {/* **** Link to The Root of the Site ******** */}
                    <Link to="/anotherpage">
                        <button className='btn btn-sm btn-info round-btn'>
                            <strong>Home</strong>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default NavBar