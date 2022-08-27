import {React, useState} from 'react'

/////////////////////////////////////////////////////
// DeCipher Display Component
/////////////////////////////////////////////////////

const DeCipherDisplayComp = (props) => {
    // //// VARIABLES ///////////////////////////////
    const location = props.location;
    const [textToDeCipher, settextToDeCipher] = useState("");   // Text to be De-Ciphered

    // //// UTILITY FUNCTIONS ///////////////////////

    /**
     * Handle Submit Function
     */
    const handleSubmit = (e) => {
        e.prevenDefault();          // Prevents browser from refreshing when form submitted
    }

    // //// OUTPUT //////////////////////////////////
    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>DeCipher Display Component</p>
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
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeCipherDisplayComp