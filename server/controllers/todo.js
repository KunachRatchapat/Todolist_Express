const prisma = require('../config/prisma')

//Crate
exports.create  = async(req,res)=>{
    //codebody
    try {
        const { title,status} = req.body
        const newTodo = await prisma.to.create({ //ชื่อตารางที่ตั้งอะ
            data: {
                title:title,
                status:status,
            }
        })
        res.json({ newTodo }); 
    } catch (err) {
        console.log(err)
        res.json({ message:"Server Error"}).status(500);
    }
}

//Read
exports.list = async(req,res)=>{
    //code
    try {
        const todos = await prisma.to.findMany()

        res.json({ todos });
    } catch (err) {
        req.json({ message:"Server Cannot Listdata"}).status(500);
    }
}

//Update
exports.update = async(req,res)=>{
    //code
    try{
    const { todoId } = req.params; 
    const { title , status} = req.body
    const updated = await prisma.to.update({
        where: {
        id : Number(todoId),
        },
        data: {
            title:title,
            status:status,
        }
    })
    res.json({ updated })

    }catch{
        res.json({ message :"Server Cannot Updated"}).status(500)
    }
}

//Delete
exports.remove = async(req,res) =>{
    //code
    try{
    const { todoId } = req.params;
    const deleted = await prisma.to.delete({
        where: {
            id: Number(todoId)
        },
        

    })
   
    res.json({ deleted });
    }catch{
        res.json({ message: "Server Cannot Deleted BruhBruh"}).status(500)
    }
}

