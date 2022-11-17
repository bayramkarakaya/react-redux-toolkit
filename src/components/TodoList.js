import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {todoCompleted,todoDelete} from '../redux/slice/todoAddSlice'
import TodoAdd from './TodoAdd'
import TodoFooter from './TodoFooter'

function TodoList() {
  const todoList =useSelector((state)=>state.todoReducers.todosYedek)
  const dispatch = useDispatch()
  console.log(todoList)
  return (
    <>
    <ul className="list-group p-0">
  
            
            <TodoAdd/>
    
       
        {todoList && todoList.map((item,index)=>{
      
            return <li className="list-group-item px-5" key={index}>
            <input className="form-check-input me-1" type="checkbox"   onClick={()=>{dispatch(todoCompleted(item.id))}} checked={!item.completed ? true : false} />
            <label className="form-check-label d-flex justify-content-between" >{item.completed ? item.todo : <s>{item.todo}</s>} <a type='button' onClick={()=>dispatch(todoDelete(item.id))}>x</a></label>
          </li>
        })}
          <TodoFooter/>
  
</ul>
    </>
  )
}

export default TodoList