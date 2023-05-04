import React from 'react';
import AnimatedLogo from "../assets/images/logo-animated.gif"

const Loader = () => {
    return (
        <div className='loader'>
            <img src={AnimatedLogo} className="logo" alt="Apple loader" />
        </div>
    )
}

export default Loader