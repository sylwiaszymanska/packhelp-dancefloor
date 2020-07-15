import React from 'react';
import loaderAnimation from './loaderAnimation.svg'

const Loader = () => {
    return (
        <img src={loaderAnimation} className="loader" alt="loader" />
    )
}

export default Loader;