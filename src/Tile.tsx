import React, {useRef} from 'react';


const Tile = () => {

    const canvas = useRef(null);
    const ctx = canvas.current.getContext("2d");
    console.log(ctx);

    return (
        <div>
            <canvas width={600} height={400}  />
        </div>
    )
}

export default Tile