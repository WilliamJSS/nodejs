const express = require('express')

/* Conexão utilizando sqlite3 */

const sqlite3 = require('sqlite3').verbose

let db = new sqlite3.Database('db.sqlite', (err)=>{
    if(err){
        return console.error(err.message)
    }
    console.log('Conectado com sucesso')
})

const app = express()

app.use(express.json())

/* GET - Buscar informações no backend */

// app.get('/users',(req,res)=>{
//     res.json({
//         nome: 'Will',
//         idade: 21,
//     })
// })

/* POST - Criar uma informação no backend */

// app.post('/users',(req,res)=>{
//     res.json({
//         nome: 'João',
//         idade: 19,
//     })
// })

/* PUT - Alterar uma informação no backend */

// app.put('/users',(req,res)=>{
//     res.json({
//         nome: 'William',
//         idade: 21,
//     })
// })

/* DELETE - Excluir uma informação no backend */

// app.delete('/users',(req,res)=>{
//     res.json({
//         nome: 'Will',
//         idade: 21,
//     })
// })

/* Parâmetros - Query: parametros nomeados enviados na rota */

// ex: http://localhost:3001/users?nome=Will&idade=21
// app.get('/users',(req,res)=>{
//     const params = req.query
//     console.log(params)
//     res.json(params)
// })

/* Parâmetros - Route Params: parametros utilizados pra identificar um recurso */

app.post('/users/:id',(req,res)=>{
    const params = req.params
    console.log(params)
    res.json(params)
})

/* Parâmetros - Request Body: corpo da requisição */

app.post('/users',(req,res)=>{
    const params = req.body
    console.log(params)
    res.json(params)
})

app.listen(3001)