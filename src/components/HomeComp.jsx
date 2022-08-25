import React from 'react'

////////////////////////////////////////////
// Home Component
////////////////////////////////////////////

const HomeComp = (props) => {
    const location = props.location;

    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>Home Display Component</p>
                    <div>
                        <h1>I'm Home</h1>
                        <p>{JSON.stringify(location)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp