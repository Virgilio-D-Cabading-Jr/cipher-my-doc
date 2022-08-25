import { React, useState } from 'react';

/////////////////////////////////////////////////////
// Cipher Display Component
/////////////////////////////////////////////////////

const CipherDisplayComp = (props) => {
    // //// VARIABLES ///////////////////////////////
    const location = props.location;
    const [cipherSubmitted, setCipherSubmitted] = useState(false);  // Has Cipher been submitted?
    const [textToCipher, setTextToCipher] = useState("");           // Text to be Ciphered
    const [cipheredText, setCipheredText] = useState("");           // Text that has been Ciphered

    // //// UTILITY FUNCTIONS ///////////////////////

    const handleSubmit = (e) => {
        e.preventDefault();
        setCipherSubmitted(true);
        console.log("**** In Cipher Display, Cipher submitted:");
        console.log({ textToCipher });
    };

    // //// OUTPUT //////////////////////////////////
    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>Cipher Submitted: {JSON.stringify(cipherSubmitted)}</p>
                    {/* **** Input Form ******** */}
                    <form onSubmit={e => handleSubmit(e)} >
                        <div className='row'>
                            <div className='col m-2'>
                                {/* *** Text To Be Ciphered ********* */}
                                <div className="form-group mb-2">
                                    <label htmlFor="textToCipher">Input Text to be Ciphered:</label>
                                    <textarea className="form-control"
                                        id="textToCipher" rows="10"
                                        placeholder="Enter text to be Ciphered here"
                                        value={textToCipher}
                                        onChange={e => setTextToCipher(e.target.value)} />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-success round-btn mt-3">
                                <strong>🔑 Apply Cipher to Text</strong>
                            </button>
                            {
                                cipherSubmitted
                                    ?
                                    <form>
                                        <div className="form-group mb-2">
                                            <label htmlFor="cipheredText">Ciphered Text:</label>
                                            <textarea className="form-control"
                                                id="cipheredText" rows="10"
                                                value={cipheredText} />
                                        </div>
                                    </form>
                                    : <div></div>
                            }
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default CipherDisplayComp