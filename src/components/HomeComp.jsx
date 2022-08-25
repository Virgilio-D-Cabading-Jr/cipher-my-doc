import React from 'react'

////////////////////////////////////////////
// Home Component
////////////////////////////////////////////

const HomeComp = (props) => {
    const location = props.location;

    return (
        <div className="container mt-4">
            <div className="row bg-white p-3 round">
                <div className="col">
                    <p>Home Display Component</p>
                    <div>
                        <h1>Welcome to Cipher My Doc</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa quis totam, at autem enim accusamus non soluta quas ut. Molestias perferendis nulla molestiae voluptates nam eius fuga? Animi, illum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa quis totam, at autem enim accusamus non soluta quas ut. Molestias perferendis nulla molestiae voluptates nam eius fuga? Animi, illum?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsa quis totam, at autem enim accusamus non soluta quas ut. Molestias perferendis nulla molestiae voluptates nam eius fuga? Animi, illum?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp