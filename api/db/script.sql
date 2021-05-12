CREATE DATABASE IF NOT EXISTS
    dockerintroduction;

USE dockerintroduction;

CREATE TABLE IF NOT EXISTS products (
    id INT(11) AUTO_INCREMENT,
    name VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);

INSERT INTO products (name, price) VALUES ('Curso Front-end especialista', 2500);
INSERT INTO products (name, price) VALUES ('Curso JS', 900);