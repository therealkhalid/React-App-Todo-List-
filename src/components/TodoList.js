import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {removeTodo,deleteAll} from '../redux/actions'
import TodoItem from './TodoItem'


function TodoList() {
  const countState=useSelector(state=>state)
  const dispatch=useDispatch()
  const handelDeleteAll=()=>{
    dispatch(deleteAll())
  }
  console.log(countState)
  return (
    <div className="bg-dark border-5 pt-5">
        {countState.map((ele)=><TodoItem ele={ele} removeTodo={removeTodo}  key={ele.id}/>)}
        <div className="container text-center pt-3">
       <div className="row g-2">
         <div className="col-12">
           <div className="p-3 border bg-dark text-light">
           <button  className='btn btn-danger w-100 mt-2' onClick={handelDeleteAll} ><i className='bi bi-trash'></i>DELETE ALL</button>
           </div>
         </div>
       </div>
     </div>
       </div>
  )
}

export default TodoList 