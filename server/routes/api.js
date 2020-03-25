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

const addClient = async (client, employeeId, countryId, emailTypeId) => {
    let query1 = `SELECT EXISTS(SELECT id FROM client WHERE client.name = '${client.name}')`
    let result = await sequelize.query(query1)
    if(!result[0][0][query1.substring(7)]){
        query2 = `INSERT INTO client VALUES (null, '${client.name}', '${client.email}',
        '${client.firstContact}', ${client.sold}, ${emailTypeId}, ${employeeId}, ${countryId})`
        result = await sequelize.query(query2)
        return result[0]
    }
    return NaN
}

router.post('/client', async (req,res) => {
    const client = req.body
    const employeeId = await addInfo(client.owner,'employee')  
    const countryId = await addInfo(client.country,'country')
    const emailTypeId = await addInfo(client.emailType)
    const clientId = await addClient(client, employeeId, countryId, emailTypeId)
    res.send({clientId})
})

module.exports = router