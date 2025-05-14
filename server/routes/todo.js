const express = require('express')
const router = express.Router()
const { create, list, update, remove } = require('../controllers/todo')

//My Enpoint
router.get('/todo',list)
router.post("/todo",create)
router.put("/todo/:todoId",update)
router.delete("/todo/:todoId",remove)



module.exports = router //ให้ไฟล์อื่นได้ใช้ router