const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:amirc@localhost/CRM')

router.get('/clients', async (req,res) => {
    const query = `SELECT client.id, client.name, client.email,
    client.first_contact,client.sold, et.type AS emailType,
    employee.name AS owner, country.name AS country
    FROM client JOIN country JOIN email_type AS et JOIN employee
    on client.email_type_id = et.id
    AND client.country_id = country.id 
    AND client.employee_id = employee.id
    ORDER BY client.id;`
    const clients = await sequelize.query(query)
    res.send(clients[0])
})

module.exports = router