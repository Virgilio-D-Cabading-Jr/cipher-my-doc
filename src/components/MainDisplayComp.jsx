import React from 'react'
import HomeComp from './HomeComp';

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
    } else {
        return (
            <div className="container mt-4">
                <div className="row bg-white p-3 round">
                    <div className="col">
                        <p>Main Display Component</p>
                        <div>
                            <h1>I'm NOT Home</h1>
                            <p>{JSON.stringify(location)}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}

export default MainDisplay