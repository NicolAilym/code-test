import React, { useState }from 'react';
import './Home.css';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FlutterDashIcon from '@mui/icons-material/FlutterDash'; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

var customers = [];
var items = [];
var sumTotal = 0.0;
var countOrders = 0;
var favoriteItem = '';
var maxFavoriteItem = 0;
var loading = false;

function loadData (data){
	if (loading == true) return;
	loading= true;
	countOrders = data.length;
	data.forEach(dato => {
		if (customers[dato.CustomerId] == undefined)  customers[dato.CustomerId] = [] ;
		var newItem= {orderId:dato.OrderId, Items: dato.Items};
		customers[dato.CustomerId].push(newItem);
	 	sumTotal +=  parseFloat(dato.Total.replace('$', ''));
	 	dato.Items.forEach(item => {
			var itemsIndex = items[item.Item];
	 		if (items[item.Item] != undefined) items[item.Item] = items[item.Item] + 1;
	 		else items[item.Item] = 1 ;
		});
	});
	for (let item in items) {
	    if (maxFavoriteItem < items[item]){ 
	    	favoriteItem = item;
			maxFavoriteItem = items[item];
		}
	}
}

function SummaryItems(props) {
	loadData(props.data);
	  return (
	  	<React.Fragment>
		  	<Stack direction='row' spacing={5}>
		      	<div className='cardSummary'>
			      	<h2> Customers </h2>
			      	<div className='avatarDataSummary'>
				      	{customers.length} &nbsp;
				      	<Avatar sx={{ bgcolor: pink[500] }}  className='avatarSummary'><FlutterDashIcon /></Avatar>
				    </div>
			    </div>
		      	<div className='cardSummary'>
			      	<h2> Revenue </h2>
			      	<div className='avatarDataSummary'>
				   	  	$ {sumTotal} &nbsp;
				      	<Avatar sx={{ bgcolor: '#ecc94b' }}  className='avatarSummary'><AttachMoneyIcon /></Avatar>
			      	</div>
		      	</div>
		      	<div className='cardSummary'>
			      	<h2> Orders </h2>
			      	<div className='avatarDataSummary'>
				     	{countOrders} &nbsp;
				      	<Avatar sx={{ bgcolor: green[500] }}  className='avatarSummary'><FactCheckIcon /> </Avatar>
			      	</div>
		      	</div>
			    <div className='cardSummary'>
				    <h2> Best Seller </h2>
				    <div className='avatarDataSummary'>
					    {favoriteItem} &nbsp;
					    <Avatar sx={{ bgcolor:'#f56565' }}  className='avatarSummary'><FavoriteBorderIcon /></Avatar>
				    </div>
			    </div>
		    </Stack>
		</React.Fragment>);}
export {SummaryItems};