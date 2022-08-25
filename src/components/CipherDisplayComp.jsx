import React from 'react'

/////////////////////////////////////////////////////
// Cipher Display Component
/////////////////////////////////////////////////////

const CipherDisplayComp = (props) => {
    const location = props.location;
    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>Cipher Display Component</p>
                    <div>
                        <h1>I'm at Cipher Display Component</h1>
                        <p>{JSON.stringify(location)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CipherDisplayComp