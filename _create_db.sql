#Create database script for film_shop

CREATE DATABASE IF NOT EXISTS film_shop;
USE film_shop;

#Create tables
CREATE TABLE IF NOT EXISTS film (id INT AUTO_INCREMENT,name VARCHAR (50),price DECIMAL(5, 2) unsigned,PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS register (id INT AUTO_INCREMENT,firstname VARCHAR (50),lastname VARCHAR (50),email VARCHAR (50),username VARCHAR (50),hashedPassword CHAR(60),PRIMARY KEY(id));
CREATE TABLE IF NOT EXISTS login (id INT AUTO_INCREMENT,firstname VARCHAR (50),lastname VARCHAR (50),email VARCHAR (50),username VARCHAR (50),hashedPassword CHAR(60),PRIMARY KEY(id));

#Create the app user
CREATE USER IF NOT EXISTS 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
GRANT ALL PRIVILEGES ON film_shop.* TO 'appuser'@'localhost';