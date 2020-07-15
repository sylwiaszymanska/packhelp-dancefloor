import React, {useEffect, useRef} from 'react';


const Dancefloor = () => {

    const canvas = useRef(null);

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");
        console.log(ctx);
    })

    return (
        <div>
            <canvas ref={canvas} width={600} height={400}  />
        </div>
    )
}

export default Dancefloor