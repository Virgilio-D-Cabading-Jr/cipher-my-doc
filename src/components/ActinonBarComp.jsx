import React from "react";

const ActionBar = () => {

    

    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <div className="row">
                        <h2 className="col">Action</h2>
                        {/* **** Cipher Button ******** */}
                        <button className="btn round-btn btn-info col m-2">
                            <strong>Cipher My Doc</strong>
                        </button>
                        {/* **** De Cipher Button ******** */}
                        <button className="btn round-btn btn-info col m-2">
                            <strong>DeCipher My Doc</strong>
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActionBar