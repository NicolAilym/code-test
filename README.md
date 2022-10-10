# Strider Javascript UI Coding Assigment

Using the receipts provided here: https://doc.strider.tech/content/receipts.json, design a UI to showcase information about the data. Note: The instructions are intentionally vague to allow you to design the UI how you think best meets the requirements:

To run the app:

```
npm install && npm start
```

## Requirements

1. On the home page:
   - Display some high-level stats about the orders.
   - Display links that will take you to a page about a specific customer which shows their order history.
   - Display a link for each item which will take you to a page that shows the number of times that item has been ordered.
2. Additionally, any information you think might be beneficial to see on the pages would be great. Be creative!
3. Create different components on the UI with [Material UI](https://mui.com/material-ui/getting-started/overview/)

**Note:** To route to the different pages, please use [React Router](https://reactrouter.com/en/main), which has already been installed.
**Note:** Material UI has also already been installed.

## Bonuses

1. Demonstrate use of React hooks.

When you have completed the assignment, upload the code to GitHub and update the README to include instructions on how to run the application. Please provide the link to your repository so that we may access it.

## Hint

The app is already configured to proxy requests to https://doc.strider.tech. When you want to hit the endpoint, all you have to do is fetch `/content/receipts.json`.


# Nicol Update

----

To run the app:

----

//npm install 
//npm install @mui/icons-masterial
//npm install @mui/masterial
//npm install @mui/x-data-grid
npm start

----

To run the  Express

----

cd ..\Express\myapp
// npm install express node-fetch cors
npm start

---

##About Express

Created a api to get the data... 

End points [http://localhost:8080/..]:
  -  data  : Load the data
  -  customer  : Count the unique customers
  -  bestSeller  : Best Seller Item
  -  revenue  : Sum the total
  -  orders  : Count the orders
  -  customersDetails?id=<value>  : Get the customer's orders
  
I don't use because I couldn't  fix the async comunication on react to wait the fetch before load a component.
But I didn't comment the call

##About React

Created 3 tabs:
 - Home: it's a summary of the information, I would like include a char but I didn't have time. Firts a card with summary and higtligth information. 
 		 Later, a daily sales summary. Finally, the historical orders, that include the order id, customer name, total and quantity items.
 - Customer: has a list of customers, and if you select someone loaded the historical orders.
 - Items: Has two list, first all available items and the second all items and its buy quantity.
