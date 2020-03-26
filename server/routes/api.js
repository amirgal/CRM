const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:amirc@localhost/CRM')

router.get('/clients', async (req,res) => {
    const query = `SELECT client.id, client.name, client.email,
    client.first_contact,client.sold, et.type AS emailType,
    owner.name AS owner, country.name AS country
    FROM client JOIN country JOIN email_type AS et JOIN owner
    on client.email_type_id = et.id
    AND client.country_id = country.id 
    AND client.owner_id = owner.id
    ORDER BY client.id;`
    const clients = await sequelize.query(query)
    res.send(clients[0])
})

router.get('/owners', async (req,res) => {
    const query = `SELECT * FROM owner`
    const owners = await sequelize.query(query)
    res.send(owners[0])
})

const addInfo = async (dataStr,type) => {
    let query1
    let query2

    if(type === 'owner'){
        query1 = `SELECT id FROM owner WHERE owner.name = '${dataStr}'`
        query2 = `INSERT INTO owner VALUES (null, '${dataStr}')`
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

const addClient = async (client, ownerId, countryId, emailTypeId) => {
    let query1 = `SELECT EXISTS(SELECT id FROM client WHERE client.name = '${client.name}')`
    let result = await sequelize.query(query1)
    if(!result[0][0][query1.substring(7)]){
        query2 = `INSERT INTO client VALUES (null, '${client.name}', '${client.email}',
        '${client.firstContact}', ${client.sold}, ${emailTypeId}, ${ownerId}, ${countryId})`
        result = await sequelize.query(query2)
        return result[0]
    }
    return NaN
}

router.post('/client', async (req,res) => {
    const client = req.body
    const ownerId = await addInfo(client.owner,'owner')  
    const countryId = await addInfo(client.country,'country')
    const emailTypeId = await addInfo(client.emailType)
    const clientId = await addClient(client, ownerId, countryId, emailTypeId)
    res.send({clientId})
})

router.put('/client', async (req,res) => {
    const data = req.body
    let query
    if(data.owner) {
        const ownerId = await addInfo(data.owner,'owner')
        query = `UPDATE client SET owner_id = ${ownerId}
        WHERE id = ${data.id}`
    } else if(data.emailType){
        const emailTypeId = await addInfo(data.emailType,'emailType')
        query = `UPDATE client SET email_type_id = ${emailTypeId}
        WHERE id = ${data.id}`
    } else {
        const countryId = await addInfo(data.country,'country')
        query = `UPDATE client 
        SET name = '${data.name}', country_id = ${countryId}
        WHERE id = ${data.id};`
    }
    await sequelize.query(query)
})

router.put('/sold', async (req,res) => {
    const clientIds = req.body
    let query
    for(let id of clientIds) {
        query = `UPDATE client 
        SET sold = 1
        WHERE id = ${id};`
        await sequelize.query(query)
    }
})


module.exports = router