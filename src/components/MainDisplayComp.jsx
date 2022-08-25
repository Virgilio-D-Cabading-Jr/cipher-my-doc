import React from 'react'
import HomeComp from './HomeComp';
import CipherDisplayComp from './CipherDisplayComp';
import DeCipherDisplayComp from './DeCipherDisplayComp';

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
            <CipherDisplayComp location={ location } />
        </div>);
    } else if (location === "DeCipher") {
        return (<div>
            <DeCipherDisplayComp location={ location } />
        </div>)
    }

    
}

export default MainDisplay