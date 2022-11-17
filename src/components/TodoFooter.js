import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { todoActiveList } from '../redux/slice/todoAddSlice'
function TodoFooter() {
    const count = useSelector((state)=>state.todoReducers.count)
    const dispatch = useDispatch()
  return (
    <li className="list-group-item d-flex justify-content-between">
      
      {count} item
      <div className='px-0'>
      <button  className='btn mr-2 active' style={{background:"#EEE5FF",color:"#8950FC"}} onClick={()=>dispatch(todoActiveList("all"))}>All</button>

      <button  type='button' className='mr-2 btn ' style={{background:"#C9F7F5",color:"#1bc5bd"}} onClick={()=>dispatch(todoActiveList("active"))}>Active</button>
      <button  className='btn mr-3' style={{background:"#ffe2e5",color:"#f64e60"}} onClick={()=>dispatch(todoActiveList("completed"))}>Completed</button>
      </div>
   
  </li>
  )
}

export default TodoFooter