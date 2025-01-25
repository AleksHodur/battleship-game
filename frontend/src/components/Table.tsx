import './Table.css';
import Grid from "./Grid";

function Table() {
    return ( 
        <div className="table" style={{ backgroundImage: "url(/img/table-background.jpg)" }}>
            <Grid />
        </div>
     );
}

export default Table;