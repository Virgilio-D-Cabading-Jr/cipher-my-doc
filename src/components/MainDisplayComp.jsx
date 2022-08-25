import React from 'react'

const MainDisplay = (props) => {
    const location = props.location;

    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p3>Main Display Component</p3>
                    {
                        location === "Home"
                            ? <div>
                                <h1>I'm Home</h1>
                                <p>Location: {location}</p>
                            </div>
                            : <div>
                                <h1>I'm NOT Home</h1>
                                <p>Location: {location}</p>
                            </div>
                    }
                    <p>Hello Test</p>
                </div>
            </div>
        </div>
    )
}

export default MainDisplay