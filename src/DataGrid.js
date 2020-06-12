import React from 'react';
import ReactDataGrid from 'react-data-grid';
// import 'react-data-grid/dist/react-data-grid.css';

const columns = [
    { key: 'id', name: 'ID' },
    { key: 'title', name: 'Title' },
    { key: 'count', name: 'Count' }];

const rows = [{ id: 0, title: 'row1', count: 20 }, { id: 1, title: 'row1', count: 40 }, { id: 2, title: 'row1', count: 60 }];

function HelloWorld() {
    console.log("heyheyhey")
}
HelloWorld();

const DataGrid = (props) => {
    
    
    console.log(props);
    return(
        <ReactDataGrid
            columns={props.columns}
            rowGetter={props.rowGetter}
            rowsCount={props.rowsCount}
            // enableCellSelect={props.enableCellSelect}
            // onGridRowsUpdated={props.onGridRowsUpdated}
            />
        
    )
        
    
}


export default DataGrid;



// columns = { columns }
// rowGetter = { i => this.state.rows[i] }
// rowsCount = { 3}
// onGridRowsUpdated = { this.onGridRowsUpdated }
// enableCellSelect = { true}