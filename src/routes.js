const express = require('express')
const crypto = require('crypto')
const connection = require('./database/connections')
const routes = express.Router()

routes.get('/users', async(req,res)=>{
    const users = await connection('users').select('*')
    res.json(users)
})

routes.post('/users', async(req,res)=>{
    const {name, email, idade, empresa} = req.body
    const id = crypto.randomBytes(4).toString('hex')
    await connection('users').insert({
        id,
        name,
        idade,
        email,
        empresa,
    })
    res.json({id})
})

module.exports = routes