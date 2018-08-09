var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "Bamazon"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log("\n");
  afterConnection();
});

// after connecting to the database list the contents of the database 
function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {

      console.log(
        "ID: " +
        res[i].Item_Id +
        " || Product_Name: " +
        res[i].Product_Name +
        " || Department_Name: " +
        res[i].Department_Name +
        " || Price:" +
        res[i].Price +
        " || Stock_Quantity: " +
        res[i].Stock_Quantity
      );

    }
    console.log("\n");
    placeOrder();
  });
}

// contains logic that takes in the order and order amount from the customer and then changes the stock quantity after order. Then is starts the store back up again.
function placeOrder() {
  inquirer
    .prompt([{
      name: "Id",
      type: "input",
      message: "Enter the ID of the product you would like to buy: "
    }, {
      name: "quantity",
      type: "input",
      message: "How many of this product? "
    }])
    .then(function (answer) {

    var query =  connection.query("SELECT * FROM products WHERE ?", {
        Item_ID: answer.Id
      }, function (err, res) {
        if (err) throw err;

        var orderQuantity = answer.quantity;
        var product = res[0].Product_Name;
        var cost = res[0].Price;
        var stock = res[0].Stock_Quantity;

        if (orderQuantity < stock) {
          console.log("\n");
          console.log("You ordered: " + orderQuantity + " of " + product + " at a cost of $" + cost + " each");
          console.log("Your total cost is $" + parseInt(cost) * parseInt(orderQuantity));
          console.log("PLEASE COME BACK SOON.");

          var newStockAmount = stock - orderQuantity;
          var query = connection.query(
            "UPDATE products SET ? WHERE ?", [{
                Stock_Quantity: newStockAmount
              },
              {
                Item_Id: answer.Item_Id
              }
            ],
            function (err, res) {
              console.log("\n");
              setTimeout(afterConnection, 2000);
            }
          );
        } else {
          console.log("There are only " + stock + " in stock, please choose a lesser amount.");
          placeOrder();
        }
      });


console.log(query.sql);

    });
};