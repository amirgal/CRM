USE CRM;
drop table client;
DROP TABLE country;
drop table email_type;
drop table employee;

CREATE TABLE email_type(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    type  VARCHAR(1)
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE country(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(50),
    first_contact VARCHAR(30),
    sold BOOLEAN,
    
    email_type_id INT,
    employee_id INT,
    country_id INT,
    FOREIGN KEY (email_type_id) REFERENCES email_type(id),
    FOREIGN KEY (employee_id) REFERENCES employee(id),
    FOREIGN KEY (country_id) REFERENCES country(id)
);
