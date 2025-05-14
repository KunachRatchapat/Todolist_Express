const express = require('express')
const app = express()
const morgan = require('morgan')
const todoRouter = require('./routes/todo')
const cors = require('cors')


//step4 MiddleWare ใครทำอะไรผ่าน กูก่อน
app.use(morgan('dev')) //ไม่ว่าจะทำอะไรต้องผ่านกูเสมอ dev บอกว่าใครทำอะไรหน้าเว็บ
app.use(express.json()) //ให้อ่าน Json
app.use(cors())

//step3 Routing
app.use('/api',todoRouter) //use todo



//step2 startServer
app.listen(5000,()=>console.log('Server is Running on Port 5000'))