import  {OrderList} from './OrderList'
import  {SummaryItems} from './SummaryItem'
import  {Char} from './Char'
import  data from './Data/data'
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import FlutterDashIcon from '@mui/icons-material/FlutterDash'; 

var loading = false;
var customers = [];
var customerList = [];
var details;
var element;

function updateCustomerSelected(customerId)
{
	element = (
        	<Box > {customers[customerId].map((order) => (<div key= {order['orderId']} className= 'orderDetails' >
															<h3> Order Id: {order['orderId']} </h3>
																<h4> Items </h4>
																{order['Items'].map((item) => (	<ListItem key= {item['Item']} >
					           																		<ListItemText primary = {item['Item']} secondary = {'Price: ' + item['ItemPrice']  + ' - ' + 'Quantity: ' + item['Quantity']} />
				            																	</ListItem>) )}
														</div>) )}
			</Box>
    );
}

function loadData ()
{
	data.forEach(dato => {
		if(customers[dato.CustomerId] == undefined)  customers[dato.CustomerId] = [] ;
		if(customerList[dato.CustomerId] == undefined) customerList[dato.CustomerId] = {name: dato.CustomerName, id: dato.CustomerId};
		customers[dato.CustomerId].push({orderId: dato.OrderId, Items: dato.Items});
	});
}


const Item = styled(Paper)(({ theme }) => ({padding: '15px',textAlign: 'center'}));

function Customers() {
	if (loading == false){
		loading = true; 
		loadData();
	}

	const [customerName, setCustomer] = useState(0);
	const handleClick = (orderId, customerName) => {
	  	setCustomer(customerName);
	    updateCustomerSelected(orderId);
	};

    return (
	  	<React.Fragment>
		 	<Box sx={{ flexGrow: 1 }} style={{  margin: '20px'}}>
				<Grid container spacing={5}>
		        	<Grid item xs={4} >
		          		<Item >
							<Grid item xs={12} md={6} className='gridStyle'>
			          			<Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
			            			<h2>Customers</h2>
			          			</Typography>
								<List >
			            			{customerList.map((order) => (<ListItem key = {order['id']}>
												            		<ListItemButton  onClick = { event => handleClick(order['id'],order['name'])}>
													                  <ListItemIcon><FlutterDashIcon /></ListItemIcon>
													                  <ListItemText primary= {order['id'] + ' - ' + order['name']} />
													                </ListItemButton>
												                </ListItem>))}
					            </List>
					        </Grid>
				        </Item>
				    </Grid>
			        <Grid item xs={8} className='gridStyle'>
			          	<Item>
							<Grid item xs={12} md={6} className='gridStyle'>
				          		<Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
				            		<h2>Details {(customerName != 0) && customerName}</h2>
				          		</Typography>
				          		<Box >
							  		{(customerName != 0) && element}
								</Box>
						    </Grid>
					    </Item>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
  );}
export {Customers};