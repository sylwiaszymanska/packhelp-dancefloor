import React, {useEffect, useRef} from 'react';


const Dancefloor = () => {

    const canvas = useRef(null);
    const rows = 2;
    const columns = 4;
    const colors = ["#3B60FF", "#F1A0C5", "#EEAB1E", "#5CC6F3",
        "#E4F1FB", "#3353D8", "#FBEBEB", "#C7E0FE"];

    const dimension = 100;

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");
        const generateTable = (rows: number, columns: number) => {
            for (let i = 0; i< rows; i++) {
                for (let j = 0; j< columns; j++) {
                    ctx.fillStyle = colors[i * columns + j];
                    ctx.fillRect(j*dimension, i*dimension, dimension, dimension);
                }
            }
        }
        generateTable(rows, columns);
    })


    return (
        <div>
            <canvas ref={canvas} width={600} height={400}  />
        </div>
    )
}

export default Dancefloor