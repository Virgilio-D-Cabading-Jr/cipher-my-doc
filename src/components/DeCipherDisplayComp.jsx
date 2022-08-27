import {React, useState} from 'react'
import DeCipherOutputComp from './DeCipherOutputComp';

/////////////////////////////////////////////////////
// DeCipher Display Component
/////////////////////////////////////////////////////

const DeCipherDisplayComp = (props) => {
    // //// VARIABLES ///////////////////////////////
    const location = props.location;
    const [decipherSubmitted, setDecipherSubmitted] = useState(false);
    const [deCipherModifier, setDeCipherModifier] = useState(0);
    const [textToDeCipher, settextToDeCipher] = useState("");   // Text to be De-Ciphered

    // //// UTILITY FUNCTIONS ///////////////////////

    /**
     * Handle Submit Function
     */
    const handleSubmit = (e) => {
        e.preventDefault();          // Prevents browser from refreshing when form submitted
        setDecipherSubmitted(true);
    }

    // //// OUTPUT //////////////////////////////////
    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>DeCipher Display Component</p>
                    {/* **** Text Input Form ******** */}
                    <form onSubmit={e => handleSubmit(e)} >
                        <div className='row'>
                            <div className='col m-2'>
                                {/* *** Text To Be De-Ciphered ********* */}
                                <div className="form-group mb-2">
                                    <label htmlFor="textToDeCipher">
                                        <strong>Text to be De-Ciphered:</strong>
                                    </label>
                                    <textarea className="form-control"
                                        id="textToDeCipher" rows="6"
                                        placeholder="Enter text to be De-Ciphered here"
                                        value={textToDeCipher}
                                        onChange={e => settextToDeCipher(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        {/* **** De-Cipher Controls ******** */}
                        <div className='row bg-dark text-white m-2 p-3 round'>
                            {/* **** De-Cipher Type ******** */}
                            <h4 className='col m-2'>Ceasar Cipher</h4>
                            {/* **** De-Cipher Modifier ******** */}
                            <div className="col m-2">
                                <div className='row'>
                                    <label className='col' htmlFor="deCipherModifier">Amount to shift:</label>
                                    <div className="col m-2">
                                        <input type="number"
                                            id="deCipherModifier"
                                            value={ deCipherModifier }
                                            onChange={e => setDeCipherModifier(parseInt(e.target.value))} />
                                    </div>
                                </div>
                            </div>
                            {/* **** Submit Button ******** */}
                            <button type="submit" className="btn btn-success round-btn col">
                                <strong>🔓 De-Cipher Text</strong>
                            </button>
                        </div>
                    </form>
                    <DeCipherOutputComp 
                        decipherSubmitted={ decipherSubmitted }
                        textToDeCipher={ textToDeCipher }
                        deCipherModifier= { deCipherModifier } />
                </div>
            </div>
        </div>
    )
}

export default DeCipherDisplayComp