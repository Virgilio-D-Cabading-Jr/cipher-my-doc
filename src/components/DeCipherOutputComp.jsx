import {React, useState} from 'react';

/////////////////////////////////////////////////////
// De-Cipher Output Component
/////////////////////////////////////////////////////

const DeCipherOutputComp = (props) => {
    // //// VARIABLES ///////////////////////////////
    const deCipheredText = props.deCipheredText;
    const setDeCipheredText = props.setDeCipheredText;

    // //// OUTPUT //////////////////////////////////
    return (<div mt-3>
        <h3>De-Cipher Submitted</h3>
        <form>
            <div className="form-group mb-2">
                <label htmlFor="deCipheredText">
                    <strong>De-Ciphered Text:</strong>
                </label>
                <textarea className="form-control"
                    id="deCipheredText" rows="6"
                    value={ deCipheredText }
                    onChange={e => setDeCipheredText(e.target.value)} />
            </div>
        </form>
    </div>);
}

export default DeCipherOutputComp