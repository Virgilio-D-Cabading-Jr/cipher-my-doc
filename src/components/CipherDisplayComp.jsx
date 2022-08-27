import { React, useState } from 'react';

/////////////////////////////////////////////////////
// Cipher Display Component
/////////////////////////////////////////////////////

const CipherDisplayComp = (props) => {
    // //// VARIABLES ///////////////////////////////
    const location = props.location;
    const [cipherSubmitted, setCipherSubmitted] = useState(false);  // Has Cipher been submitted?
    const [cipherModifier, setCipherModifier] = useState(0);
    const [textToCipher, setTextToCipher] = useState("");           // Text to be Ciphered
    const [cipheredText, setCipheredText] = useState("");           // Text that has been Ciphered

    // //// UTILITY FUNCTIONS ///////////////////////

    /**
     * Ceasar Cipher
     * The function accepts following parameters:
     *  1. STRING s
     *  2. INTEGER k
     * The function is expected to return a STRING.
     */

    const caesarCipher = (s, k) => {
        console.log({ k });
        // Variables
        const alphaMap = {
            'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
        };
        const alphaArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let output = "";

        // Iterate through the string
        //      for each letter in the string
        //          determine if it is a capital or lower case letter
        //          shift the letter by #k
        //          memorize the shifted letter to output string
        for (let currentLet of s) {
            // console.log({currentLet});
            // console.log("Alphamap:", alphaMap[currentLet.toLowerCase()])
            // Check if current letter is a letter
            if (currentLet.toLowerCase() != currentLet.toUpperCase()) {
                const isCapital = currentLet === currentLet.toUpperCase();
                // console.log({isCapital});
                const shiftAmt = (parseInt(alphaMap[currentLet.toLowerCase()]) + k) % 26;
                // console.log("k:", k);
                // console.log({shiftAmt});
                if (isCapital) {
                    output += alphaArray[shiftAmt].toUpperCase();
                } else {
                    output += alphaArray[shiftAmt];
                }
            } else {
                output += currentLet;
            }
        }
        // console.log({ output });
        return output;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCipherSubmitted(true);
        setCipheredText(caesarCipher(textToCipher, cipherModifier))
        console.log("**** In Cipher Display, Cipher submitted:");
        console.log({ textToCipher });
        console.log({ cipherModifier });
    };

    // //// OUTPUT //////////////////////////////////
    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    {/* **** Input Form ******** */}
                    <form onSubmit={e => handleSubmit(e)} >
                        <div className='row'>
                            <div className='col m-2'>
                                {/* *** Text To Be Ciphered ********* */}
                                <div className="form-group mb-2">
                                    <label htmlFor="textToCipher">
                                        <strong>Text to be Ciphered:</strong>
                                    </label>
                                    <textarea className="form-control"
                                        id="textToCipher" rows="10"
                                        placeholder="Enter text to be Ciphered here"
                                        value={textToCipher}
                                        onChange={e => setTextToCipher(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        {/* **** Cipher Controls ******** */}
                        <div className='row bg-dark text-white m-2 p-3 round'>
                            {/* **** Cipher Type ******** */}
                            <h4 className='col m-2'>Ceasar Cipher</h4>
                            {/* **** Cipher Modifier ******** */}
                            <div className="col m-2">
                                <label htmlFor="cipherModifier">Amount to shift:</label>
                                <input type="number"
                                    id="cipherModifier"
                                    value={cipherModifier}
                                    onChange={e => setCipherModifier(parseInt(e.target.value))} />
                            </div>
                            {/* **** Submit Button ******** */}
                            <button type="submit" className="btn btn-success round-btn col m-2">
                                <strong>🔑 Apply Cipher to Text</strong>
                            </button>
                        </div>
                    </form>
                    {/* **** Output Area ******** */}
                    {
                        cipherSubmitted
                            ?
                            <form>
                                <div className="form-group mb-2">
                                    <label htmlFor="cipheredText">
                                        <strong>Ciphered Text:</strong>
                                    </label>
                                    <textarea className="form-control"
                                        id="cipheredText" rows="10"
                                        value={cipheredText}
                                        onChange={e => setCipheredText(e.target.value)} />
                                </div>
                            </form>
                            : <div></div>
                    }
                </div>
            </div >
        </div >
    )
}

export default CipherDisplayComp