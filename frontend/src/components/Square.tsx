import { SquareClass } from '../lib/classes';
import './Square.css';

interface SquareProps{
    squareObject: SquareClass
}

function Square(children: SquareProps) {

    var squareObject = children.squareObject;

    return ( 
        <div className="square">
            {/* {squareObject.xAxis}{squareObject.yAxis} */}

            {(squareObject.xAxis == 1) && (
                <div className='yaxis-labels'>{ squareObject.yAxis }</div>
            )}

            {(squareObject.yAxis == 'A') && (
                <div className='xaxis-labels'>{ squareObject.xAxis }</div>
            )}

            
        </div>
     );
}

export default Square;