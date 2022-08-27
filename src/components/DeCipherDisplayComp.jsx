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
    const [deCipheredText, setDeCipheredText] = useState("");   // Text that has been De-Ciphered

    // //// UTILITY FUNCTIONS ///////////////////////

    /**
     * De-Cipher Ceasar Cipher Function
     * @param {String} s : string to be de-ciphered
     * @param {Integer} k : amount of shift for de-cipher
     * @returns De-Ciphered String
     */
    const deCaesarCipher = (s, k) => {
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
                const shiftAmt = (parseInt(alphaMap[currentLet.toLowerCase()]) - k) % 26;
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
                    {
                        decipherSubmitted
                            ?   <DeCipherOutputComp 
                                    deCipheredText={ deCipheredText }
                                    setDeCipheredText= { setDeCipheredText } />
                            :   <div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default DeCipherDisplayComp