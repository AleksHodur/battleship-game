import './Grid.css';

import Square from "./Square";
import { SquareClass, Line } from '../lib/classes';

const gridTest = [
    new Line(), new Line(), new Line(), new Line(), new Line(),
    new Line(), new Line(), new Line()
]

function Grid() {
    return ( 
        <div className="grid">
            { gridTest.map((line: Line) => (
                line.squares.map((square: SquareClass) => (
                    <Square />
                ))
            )) }
        </div>
     );
}

export default Grid;