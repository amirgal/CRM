const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:amirc@localhost/CRM')
const data = require('./data.json');

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

const addClient = async (client, employeeId, countryId, emailTypeId) => {
    let query1 = `SELECT EXISTS(SELECT id FROM client WHERE client.name = '${client.name}')`
    let result = await sequelize.query(query1)
    if(!result[0][0][query1.substring(7)]){
        query2 = `INSERT INTO client VALUES (null, '${client.name}', '${client.email}',
        '${client.firstContact}', ${client.sold}, ${emailTypeId}, ${employeeId}, ${countryId})`
        result = await sequelize.query(query2)
    }
    return
}

const migrateData = async data => {
    for(let client of data){
        const employeeId = await addInfo(client.owner,'owner')  
        const countryId = await addInfo(client.country,'country')
        const emailTypeId = await addInfo(client.emailType)
        await addClient(client, employeeId, countryId, emailTypeId)
    };
}

migrateData(data.slice(0,9))