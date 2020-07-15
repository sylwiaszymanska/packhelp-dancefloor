import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';

// const serverMockedResponse = () => {
//
// }

const Dancefloor = () => {
    const canvas = useRef(null);
    const [colors, setColors]= useState(["#3B60FF", "#F1A0C5", "#EEAB1E", "#5CC6F3",
        "#E4F1FB", "#3353D8", "#FBEBEB", "#C7E0FE"]);
    const dimension = 100;

    const [rows, setRows] = useState(2);
    const [columns, setColumns] = useState(4);

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");
        ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
        const generateTable = (rows: number, columns: number) => {
            for (let i = 0; i< rows; i++) {
                for (let j = 0; j< columns; j++) {
                    ctx.fillStyle = colors[(i * columns + j) % colors.length];
                    ctx.fillRect(j*dimension, i*dimension, dimension, dimension);
                }
            }
        }

        generateTable(rows, columns);
    }, [rows, columns, colors]);

    const handleRowsChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setRows(parseInt(event.target.value));
    }
    const handleColumnsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColumns(parseInt(event.target.value));
    }

    const handleGenerate = () => {}
    const getClickedTile = (x: number, y: number) => {
        const diffY = y - canvas.current.offsetTop ;
        const diffX = x - canvas.current.offsetLeft;
        const clickedColumn = Math.floor(diffX / dimension);
        const clickedRow = Math.floor(diffY / dimension);
        console.log(clickedRow, clickedColumn);
        const elementInArray = clickedRow * columns + clickedColumn;
        const newColors = [...colors];
        newColors[elementInArray] = "#000000"
        setColors(newColors);
    }

    const handleCanvasOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
        getClickedTile( event.clientX, event.clientY);
    }

    return (
        <div className="Dancefloor">
            <div className="Dancefloor-controllers">
                <input type="number" name="rows" value={rows} onChange={handleRowsChange}/>
                <input type="number" name="columns" value={columns} onChange={handleColumnsChange}/>
                <button type="button" onClick={handleGenerate}>Generate</button>

            </div>
            <canvas className="Dancefloor-canvas" ref={canvas} width={1600} height={400} onClick={handleCanvasOnClick} />
        </div>
    )
}

export default Dancefloor