import React from "react";

//////////////////////////////////////////////
// Component: Action Bar
//////////////////////////////////////////////

const ActionBar = (props) => {

const locationIsCipher = (e) => {
    e.preventDefault();
    props.setNewLocation("Cipher")
}

const locationIsDeCipher = (e) => {
    e.preventDefault();
    props.setNewLocation("DeCipher")
}

    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <div className="row">
                        <h2 className="col">Action</h2>
                        {/* **** Cipher Button ******** */}
                        <button className="btn round-btn btn-info col m-2" 
                            onClick={ locationIsCipher }>
                            <strong>CIPHER</strong>
                        </button>
                        {/* **** De Cipher Button ******** */}
                        <button className="btn round-btn btn-info col m-2"
                            onClick={ locationIsDeCipher }>
                            <strong>DE-CIPHER</strong>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionBar