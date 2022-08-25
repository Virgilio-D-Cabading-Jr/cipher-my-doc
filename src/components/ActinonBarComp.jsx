import React from "react";

//////////////////////////////////////////////
// Component: Action Bar
//////////////////////////////////////////////

const ActionBar = (props) => {
    // //// VARIABLES ////////////////////////
    const location = props.location;

    // //// UTILITY FUNCTIONS ////////////////

    const locationIsCipher = (e) => {
        e.preventDefault();
        props.setNewLocation("Cipher")
    }

    const locationIsDeCipher = (e) => {
        e.preventDefault();
        props.setNewLocation("DeCipher")
    }

    // //// OUTPUT //////////////////////////
    return (
        <div className="container mt-4">
            <div className="row bg-dark p-3 round">
                <div className="col">
                    <div className="row">
                        <h2 className="col text-warning">Action</h2>
                        {/* **** Cipher Button ******** */}
                        {
                            location === "Cipher"
                            ?   <button className="btn btn-location-active col m-2" 
                                    onClick={ locationIsCipher }>
                                    <strong>🔐 CIPHER</strong>
                                </button>
                            :   <button className="btn btn-location col m-2" 
                                    onClick={ locationIsCipher }>
                                    <strong>🔐 CIPHER</strong>
                                </button>
                        }
                        {/* **** De Cipher Button ******** */}
                        {
                            location === "DeCipher"
                            ?   <button className="btn btn-location-active col m-2"
                                    onClick={ locationIsDeCipher }>
                                    <strong>🔓 DE-CIPHER</strong>
                                </button>
                            :   <button className="btn btn-location col m-2"
                                    onClick={ locationIsDeCipher }>
                                    <strong>🔓 DE-CIPHER</strong>
                                </button>
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionBar