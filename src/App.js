import React from "react";
import { Route,Routes } from "react-router";
import Nav from './components/Navbar/Nav'
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import EditContact from "./components/EditContact";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
function App() {
  return (
    <div style={{height:'35rem'}} className='bg-dark'>
      <Nav/>
        <Routes className="container ">
                  <Route exact path='/' element={<TodoList/>}></Route>
                  <Route exact path='/addTodo' element={<AddTodo/>}></Route>
                  <Route exact path='/about' element={<About/>}></Route>
                  <Route exact path='/editContact/:id' element={<EditContact/>}></Route>
           </Routes>
        
          
    </div>
  );
}

export default App;
