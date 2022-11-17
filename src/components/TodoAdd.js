import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {todoEkle} from '../redux/slice/todoAddSlice'
function TodoAdd() {
    const dispatch=useDispatch()
    const [todo,setTodo] =useState()
    const onChangeHandle=(e)=>{
        setTodo(e.target.value)
    }
    const todoAddHandle=(todos)=>{
       if(todos&&todos.trim()!==""&&todos.trim().length>0){
        dispatch(todoEkle(todos))
       }
       else{
        return <div>lütfen boş geçmeyiniz</div>
       }
        
        
    }

  return (
    <>
    <li className="list-group-item">
    <div className="input-group">
  <input type="text" className="form-control" onChange={onChangeHandle} value={todo} />
  <button className="btn btn-outline-secondary" onClick={()=>{todoAddHandle(todo);setTodo("")}}>Button</button>
</div>
    
  </li>
    </>
  )
}

export default TodoAdd