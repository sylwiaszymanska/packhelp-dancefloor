import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import './Dancefloor.css';

const colors = ["#3B60FF", "#F1A0C5", "#EEAB1E", "#5CC6F3",
    "#E4F1FB", "#3353D8", "#FBEBEB", "#C7E0FE"];
const dimension = 100;

interface DancefloorProps {
    data: {
        columns: number
        rows: number
    }
}

const Dancefloor = (props: DancefloorProps) => {
    const canvas = useRef(null);
    const [rows, setRows] = useState(props.data?.rows);
    const [columns, setColumns] = useState(props.data?.columns);
    const [width, setWidth] = useState(400);
    const [height, setHeight] = useState(200);

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
    }, [rows, columns]);

    const handleRowsChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setRows(parseInt(event.target.value));
        setHeight(parseInt(event.target.value) * dimension);
    }
    const handleColumnsChange = (event: ChangeEvent<HTMLInputElement>) => {
        setColumns(parseInt(event.target.value));
        setWidth(parseInt(event.target.value) * dimension);
    }

    // const handleGenerate = () => {}
    const colorClickedTile = (x: number, y: number) => {
        const diffY = y - canvas.current.offsetTop ;
        const diffX = x - canvas.current.offsetLeft;
        const clickedColumn = Math.floor(diffX / dimension);
        const clickedRow = Math.floor(diffY / dimension);
        const ctx = canvas.current.getContext("2d");
        ctx.fillStyle = "#000000";
        ctx.fillRect(clickedColumn*dimension, clickedRow*dimension, dimension, dimension);
    }

    const handleCanvasOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
        colorClickedTile(event.clientX, event.clientY);
    }

    return <div className="Dancefloor">
        <h1>Dancefloor</h1>
        <div className="Dancefloor-controllers">
            <label>
                Set column quantity: {" "}
                <input type="number" name="rows" value={rows} onChange={handleRowsChange}/>
            </label>
            <label>
                Set row quantity: {" "}
                <input type="number" name="columns" value={columns} onChange={handleColumnsChange}/>
            </label>
            {/*<button className="Dancefloor-generate-button" type="button" onClick={handleGenerate}>Generate</button>*/}
        </div>
        <canvas
            className="Dancefloor-canvas" ref={canvas} width={width} height={height}
                onClick={handleCanvasOnClick}/>
    </div>
}

export default Dancefloor