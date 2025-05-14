import React, { useEffect, useState } from "react"
import List from "./List"
import { toast } from 'react-toastify';
import { getData , createData } from "../../api/todo"

const Todo = () => {
    const[data,setData] = useState([]);
    const[title,setTitle] = useState('');

    useEffect(()=>{
    //code
    handleGetData();

//[] Protect Infinityloop
        },[]) 

    //ShowData
     const handleGetData = async ()=>{
         getData() //เรียกใช้ โฟลเดอร์ getdata ใน api
             .then((res)=>{
                console.log(res.data.todos)
                setData(res.data.todos)
             })
             .catch((err)=>{
                console.log(err) 
             })
    
        };

    
     const handleOnChange = async(e)=>{
        setTitle(e.target.value);
     };


     //Add Data
     const handleAddData = ()=>{
        createData({title})
        .then((res)=>{
            console.log(res)
            toast.success(`Add Todo ${res.data.newTodo.title} SusccessKub!!`)
            handleGetData() //ให้มันไม่ต้องรีเฟรชงับตรงนี้
        })
        .catch((err)=>{
            console.log(err)
        })
     }


  return (
    <>
        {/*CreateData */}
        <div>
            <input type="text" name="title" onChange={handleOnChange}/>
            <button onClick={handleAddData}>Add Data</button>
        </div>


         {/*DeleteData */}
        <div>
            {data.map((item,index) => (
                <List  key={index} item={item} handleGetData={handleGetData}/>

            ))}
        </div>
    </>
  )
}
export default Todo