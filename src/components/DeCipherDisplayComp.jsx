import {React, useState} from 'react'

/////////////////////////////////////////////////////
// DeCipher Display Component
/////////////////////////////////////////////////////

const DeCipherDisplayComp = (props) => {
    const location = props.location;
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
                                        id="textToDeCipher" rows="10"
                                        placeholder="Enter text to be De-Ciphered here"
                                        value={textToCipher}
                                        onChange={e => setTextToDeCipher(e.target.value)} />
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