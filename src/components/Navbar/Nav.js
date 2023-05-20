import React from 'react'
//import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import './Style.css'
function Nav() {
  return (
    
    <div className="container-fluid" style={{marginBottom:'10rem'}}>
               <nav className="navbar navbar-expand-lg bg-dark p-5"  style={{position:'fixed',top:0,left:0,right:0,zIndex:1000}}>
               <img src={'https://cdn.iconscout.com/icon/premium/png-256-thumb/todo-list-1941995-1642325.png'} className="fluid" width={60} alt="" />
                <NavLink className="text-decoration-none " to="/"><h1 className="navbar-brand text-warning ms-1"style={{fontSize:'2rem'}} >TODO<span className='text-danger'> LIST</span></h1></NavLink>
                <button className="bg-light navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav ms-5 mt-lg-0"style={{fontSize:'1.8rem'}}>
                             <li className='nav-item '><NavLink className="m-3 text-warning text-decoration-none" to="/addTodo" >ADD TODO</NavLink></li>
                             <li className="nav-item"><NavLink className="m-3 text-warning text-decoration-none" to="/about">ABOUT</NavLink></li>
                       </ul>
                   </div>
               </nav>
             </div>
    
  )
}

export default Nav
