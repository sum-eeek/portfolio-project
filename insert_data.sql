#Insert data into the tables

USE film_shop;

INSERT INTO film (name, price)VALUES('The Godfather', 7.45),('Pulp Fiction', 8.99),('The Green Mile', 7.00),('Back to the Future', 5.65),('Parasite', 7.99),('Gladiator', 5.99),('Spirited Away', 9.75),('Alien', 9.99),('The Shining', 11.45),('Scarface', 6.99),('The Truman Show', 8.99),('Shutter Island', 7.50),('Jurassic Park', 7.20),('WALL.E', 4.99),('No Country for Old Men', 10.99),('The Thing', 8.00),('Jaw', 10.00),('The Terminator', 7.49), ('Avatar', 8.99);
INSERT INTO login (firstname, lastname, email, username, hashedPassword)VALUES('Robert', 'Smith', 'smith2025@email.com', 'test_user', 'test_567'),('Henry', 'Jones', 'hJones@email.com', 'movie_fan', 'pass321'),('Catherine', 'Miller', 'miller05@email.com', 'Cath', 'film01042'), ('Nancy', 'Clark', 'clarkN12@email.com', 'nClark', '75_word');