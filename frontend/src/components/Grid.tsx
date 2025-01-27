import './Grid.css';

import Square from "./Square";
import { SquareClass, Line } from '../lib/classes';

const gridTest = [
    new Line('A'), new Line('B'), new Line('C'), new Line('D'), new Line('E'),
    new Line('F'), new Line('G'), new Line('H'), new Line('I'), new Line('J')
]

function Grid() {
    return ( 
        <div className="grid">
            { gridTest.map((line: Line) => (
                line.squares.map((square: SquareClass) => (
                    <Square key={square.xAxis + square.yAxis} squareObject={square} />
                ))
            )) }
        </div>
     );
}

export default Grid;