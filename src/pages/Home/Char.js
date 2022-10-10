import React,{ useEffect }from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';

const columnnListOrders : GridColDef[] = [
		{field: 'id', headerName: 'Id', hide: true},
		{field: 'date', headerName: 'Date', flex: 0.1},
		{field: 'total', headerName: 'Total', flex: 0.1}
	];

var loading = false;
var dataTotal = [];
var loading = false;
var listItems;

function Char (props) {
	if (loading == false){
		loading = true;
		props.data.forEach(dato => {
		 	let total =  parseFloat(dato.Total.replace('$', ''));
		 	var date = (new Date(dato.Date)).toLocaleDateString('en-US');
	 		if (dataTotal[date] != undefined){
	 			dataTotal[date] += total;
	 		} else { 
	 			dataTotal[date] = total;
	 		}
		});
		listItems = [];
		for (let item in dataTotal) {
	    	listItems.push({
            id: dataTotal[item] + "_" + item,
            date: item,
            total: "$ " + dataTotal[item]
          });
		}
	}
 	return (
	  	<React.Fragment>
	  		<h1>
	  			Sale Summary
	  		</h1>
			<div style={{height:371, width:'auto', margin: '20px'}}>
		  		<DataGrid
		  			rows={listItems}
		  			columns = {columnnListOrders}
		  			pageSize={5}
		  			rowsPerPageOpstions={[5]}
		  			showBorders={true}
		  		/>
		  	</div>
		</React.Fragment>
	  );}
export {Char};