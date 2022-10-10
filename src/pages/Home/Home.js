import React from 'react';
import  {OrderList} from './OrderList'
import  {SummaryItems} from './SummaryItem'
import  {Char} from './Char'
import  data from './Data/data'

function Home() {
   return (
  		<React.Fragment>
			<SummaryItems data={data} />
			<Char  data={data}/>
	  		<OrderList data={data} /> 
		</React.Fragment>
  );}
export {Home};