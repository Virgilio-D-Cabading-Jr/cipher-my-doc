import React from 'react'
import HomeComp from './HomeComp';
import CipherDisplayComp from './CipherDisplayComp';

/////////////////////////////////////////////////////
// Main Display Component
/////////////////////////////////////////////////////

const MainDisplay = (props) => {
    const location = props.location;

    if (location === "Home") {
        return (
            <div>
                <HomeComp location={ location } />
            </div>
        );
    } else if (location === "Cipher") {
        return (<div>
            <CipherDisplayComp location={ location} />
        </div>);
    }

    
}

export default MainDisplay