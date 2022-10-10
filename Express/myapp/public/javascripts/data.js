var customers = [];
var items = [];
var sumTotal = 0.0;
var countOrders = 0;
var favoriteItem = '';
var maxFavoriteItem = 0;

exports.loadData =  function(data)
{
	countOrders = data.length;
	data.forEach(dato => 
	{
		if (customers[dato.CustomerId] == undefined)  customers[dato.CustomerId] = [] ;
		var newItem= {orderId:dato.OrderId, Items: dato.Items};
		customers[dato.CustomerId].push(newItem);
	 	
	 	dato.Items.forEach(item => 
		{
	 		if (items[item.Item] != undefined) items[item.Item] = items[item.Item] + 1
	 		else items[item.Item] = 1 ;
		});
		sumTotal +=  parseFloat(dato.Total.replace('$', ''));
	});
	for (let item in items) {
	    if (maxFavoriteItem < items[item])
	    { 
	    	favoriteItem = item;
			maxFavoriteItem = items[item];
		}

	}
};

exports.customers = function() { return customers.length; };

exports.bestSeller = function() { return favoriteItem; };

exports.revenue = function() { return '$ ' + sumTotal; };

exports.orders = function() { return countOrders; };

exports.customersDetails = function(id) { return customers[id]; };




