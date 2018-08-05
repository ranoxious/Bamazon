Create database Bamazon;

Use database Bamazon;

CREATE TABLE Products (
	Item_Id INT NOT NULL AUTO_INCREMENT,
	Product_Name VARCHAR(40) NOT NULL,
	Department_Name VARCHAR(40) NOT NULL,
  Price INT NOT NULL,
	Stock_Quantity INT NOT NULL,
	PRIMARY KEY(Item_Id)
	);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beats Noise Cancellation Headphones", "Electronics", 300.00, 59);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Kuvings Whole Slow Juicer", "Electronics", 450.95, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coco Chanel Perfume", "Cosmetics", 92.50, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("No Show Socks", "Clothing", 15.95, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Food", "Pet", 27.85, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sneakers", "Athletics", 156.00, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rampage", "Movies", 19.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Intro to Javascript for Beginner", "Books", 35.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Arm and Hammer Detergent", "Household", 10.99, 301);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fiji Hybrid Mountain Bicycle", "Vehicle", 2400.00, 140);

CREATE TABLE departments (
department_id INTEGER(11) AUTO_INCREMENT NOT NULL,
department_name VARCHAR(200) NOT NULL,
over_head_costs DECIMAL(11,2) NOT NULL,
PRIMARY KEY(department_id)
)
