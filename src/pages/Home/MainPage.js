import React, {useEffect, useState} from 'react';
import {Home} from './Home';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Items} from './Items';
import {Customers} from './Customers';
import FlutterDashIcon from '@mui/icons-material/FlutterDash'; 

var element = <Home />;


 function MainPage(req, res) {
  const [appMenu, setAppMenu] = useState(0);
  const handleClick = (menu) => {
      setAppMenu(menu);
      if (menu == 2){
          element = <Customers />
      } else if ( menu == 3) {
          element = <Items />
      } else {
          element = <Home />
      }
  };

	const dataFetch = fetch('http://localhost:8080/data')
  		.then(response => response.json())
  		.then(datoFetch => console.log(datoFetch));

	return (
		<React.Fragment>
      <AppBar component='nav' position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <FlutterDashIcon /> NiKi
          </Typography>
          <Button key = 'Home'     sx={{ color: '#fff' }} onClick={event => handleClick(1)} > Home </Button>
          <Button key = 'Customer' sx={{ color: '#fff' }} onClick={event => handleClick(2)} > Customer </Button>
          <Button key = 'Items'    sx={{ color: '#fff' }} onClick={event => handleClick(3)} > Items </Button>
        </Toolbar>
      </AppBar>
			<Box id='main_page'>
	  		{element}
	  	</Box>
	</React.Fragment>
	);}
export {MainPage};