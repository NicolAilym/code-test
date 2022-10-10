import  data from "./Data/data"
import * as React from 'react';
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
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

var loading = false;
var items = [];
var itemsDetails = [];
var details;

function loadData (){
	data.forEach(dato => {
		dato.Items.forEach(item => {
			if (itemsDetails[item.Item] == undefined){
				items.push(item.Item);
				itemsDetails[item.Item] = {name: item.Item, quantity: 1} ;
			} else {
				var quantity = itemsDetails[item.Item]['quantity'];
				itemsDetails[item.Item] = {name: item.Item, quantity: quantity + 1}
			}
		});
	});
}

const Item = styled(Paper)(({ theme }) => ({padding: '15px',textAlign: 'center'}));

function Items() {
	if (loading == false) {
		loading =true; 
		loadData();
	}

   return (
	  	<React.Fragment>
		 	<Box sx={{ flexGrow: 1 }} style={{  margin: '20px'}}>
		      	<Grid container spacing={5}>
		        	<Grid item xs={4} >
		          		<Item >
		          			<Grid item xs={12} md={6} className='gridStyle'>
			          			<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component='div'>
			            			<h2>Items</h2>
			          			</Typography>
			            		<List >
			            			{items.map((item) => <ListItem key = {item}>
											                  <ListItemIcon><CatchingPokemonIcon /></ListItemIcon>
											                  <ListItemText primary= {item} />
										                </ListItem> )}
					            </List>
					        </Grid>
				        </Item>
				    </Grid>
			        <Grid item xs={8} className='gridStyle'>
				        <Item>
							<Grid item xs={12} md={6} className='gridStyle'>
					          	<Typography sx={{ mt: 4, mb: 2 }} variant="h6" component='div'>
					            	<h2>Details</h2>
					          	</Typography>
					          	<Box >
				        			{items.map((item) => (<ListItem key= {itemsDetails[item]['name']} >
															<ListItemIcon><CatchingPokemonIcon /></ListItemIcon>
												           <ListItemText primary= {itemsDetails[item]['name']} secondary = {'Quantity: ' + itemsDetails[item]['quantity']} />
											            </ListItem>) )}
								</Box>
						    </Grid>
					    </Item>
					</Grid>
				</Grid>
			</Box>
		</React.Fragment>
	);}
export {Items};