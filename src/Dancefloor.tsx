import React, {ChangeEvent, useEffect, useRef, useState} from 'react';


const Dancefloor = () => {
    const canvas = useRef(null);
    const colors = ["#3B60FF", "#F1A0C5", "#EEAB1E", "#5CC6F3",
        "#E4F1FB", "#3353D8", "#FBEBEB", "#C7E0FE"];
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
    }, [rows, columns]);

    const handleRowsChange = (event: ChangeEvent<HTMLInputElement> ) => {
        setRows(parseInt(event.target.value));
    }
    const handleColumnsChange = (event:  ChangeEvent<HTMLInputElement>) => {
        setColumns(parseInt(event.target.value));
    }

    const handleGenerate = () => {}


    return (
        <div className="Dancefloor">
            <div className="Dancefloor-controllers">
                <input type="number" name="rows" value={rows} onChange={handleRowsChange}/>
                <input type="number" name="columns" value={columns} onChange={handleColumnsChange}/>
                <button type="button" onClick={handleGenerate}>Generate</button>

            </div>
            <canvas className="Dancefloor-canvas" ref={canvas} width={1600} height={400} />
        </div>
    )
}

export default Dancefloor