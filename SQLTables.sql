USE CRM;
-- drop table client;
-- DROP TABLE country;
-- drop table email_type;
-- drop table employee;

-- CREATE TABLE email_type(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     type  VARCHAR(1)
-- );

-- CREATE TABLE employee(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE country(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20)
-- );

-- CREATE TABLE client(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(30),
--     email VARCHAR(50),
--     first_contact VARCHAR(30),
--     sold BOOLEAN,
    
--     email_type_id INT,
--     employee_id INT,
--     country_id INT,
--     FOREIGN KEY (email_type_id) REFERENCES email_type(id),
--     FOREIGN KEY (employee_id) REFERENCES employee(id),
--     FOREIGN KEY (country_id) REFERENCES country(id)
-- );

SELECT client.id, client.name, client.email,
client.first_contact,client.sold, et.type AS et,
employee.name AS owner, country.name AS country
FROM client JOIN country JOIN email_type AS et JOIN employee
on client.email_type_id = et.id
AND client.country_id = country.id 
AND client.employee_id = employee.id
ORDER BY client.id;

-- SELECT p.name AS poke_names
--                 FROM pokemon AS p JOIN pokemon_type AS pt
--                 on p.type = pt.id
--                 WHERE pt.type = 'grass'