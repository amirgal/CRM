const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:amirc@localhost/CRM')

const addInfo = async (dataStr,type) => {
    let query1
    let query2

    if(type === 'employee'){
        query1 = `SELECT id FROM employee WHERE employee.name = '${dataStr}'`
        query2 = `INSERT INTO employee VALUES (null, '${dataStr}')`
    } else if(type === 'country') {
        query1 = `SELECT id FROM country WHERE country.name = '${dataStr}'`
        query2 = `INSERT INTO country VALUES (null, '${dataStr}')`
    } else {
        query1 = `SELECT id FROM email_type WHERE email_type.type = '${dataStr ? dataStr : '.'}'`
        query2 = `INSERT INTO email_type VALUES (null, '${dataStr ? dataStr : '.'}')`
    }

    let result = await sequelize.query(query1)
    if(result[0].length === 0){
        result = await sequelize.query(query2)
        return result[0]
    }else {
        return result[0][0].id
    }
}

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

router.post('/client', async (req,res) => {
    const client = req.body
    const query = `INSERT `
})

module.exports = router