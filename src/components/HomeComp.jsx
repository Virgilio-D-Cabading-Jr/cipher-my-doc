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
                    <div>
                        <h1>Welcome to Cipher My Doc</h1>
                        <p>Here, you can Cipher or DeCipher text documents to your content</p>
                        <p>Click on the Acion Bar to Get started.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp