import React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams} from '@mui/x-data-grid';


const columnnListOrders : GridColDef[] = [
		{field: 'id', headerName: 'Id', hide: true},
		{field: 'orderId', headerName: 'Order Id', flex: 0.1},
		{field: 'customerName', headerName: 'Customer', flex: 0.3},
		{field: 'total', headerName: 'Total', flex: 0.1},
		{field: 'totalItems', headerName: 'N° of items', flex: 0.1}
	];

function OrderList(props) {
	const listItems = props.data.map((dato, index) => ({
            id: index,
            orderId: dato.OrderId,
            customerName: dato.CustomerName,
            total: dato.Total,
            totalItems: dato.Items.length
    }));
  	return (
  		<React.Fragment>
  			<h1>
	  			Historical Orders
	  		</h1>
	  		<div style={{height:371, width: 'auto', margin: '20px'}}>
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
export {OrderList};
