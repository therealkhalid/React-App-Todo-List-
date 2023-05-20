import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

function TodoItem({ele,removeTodo}) {
    const dispatch=useDispatch()
    const handelRemove=(id)=>{dispatch(removeTodo(id))}
    const[toggle,setToggle]=React.useState(false)
    const handelToggle=()=>{setToggle(!toggle)}
  return (
    <>          
                <div className="container card w-75 mb-3 ">
                    <div className="card-body">
                        <h4 className="card-title">{ele.fullName} 
                          <button onClick={()=>handelToggle()}
                          className="btn btn-primary me-2"
                          style={{float:'left'}}>
                            {toggle?<i className="bi bi-arrow-up-short"></i>:<i className="bi bi-arrow-down-short"></i>}
                            </button>
                        <button onClick={()=>handelRemove(ele.id) } style={{float:'right'}}className="btn btn-danger me-2"><i className="bi bi-trash"></i></button>
                        <Link to={`editContact/${ele.id}`}><button  style={{float:'right'}}className="btn btn-warning me-2"><i className="bi bi-pen"></i></button></Link>
                  </h4>
                    </div>
                    {
                        toggle ?
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{ele.tel}</li>
                        <li className="list-group-item">{ele.email}</li>
                    </ul>
                    :null
                   }
                </div>
    
            </>
  )
}

export default TodoItem

