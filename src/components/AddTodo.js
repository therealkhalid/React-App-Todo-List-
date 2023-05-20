import React from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/actions'

function AddTodo() {
  const [name, setName] =  React.useState('');
  const [telephone, setTelephone] =  React.useState('');
  const [Email, setEmail] =  React.useState('');
	const dispatch = useDispatch();
	const handleSubmit=(e)=>{
		e.preventDefault();
		let date = new Date();
		let time = date.getTime();
		const persone={id:time,fullName:name,tel:telephone,email:Email};
		dispatch(addTodo(persone))
	}
	const disabled=()=>{
		if(!name||!telephone||!Email){return true}
	}
  return (
	<form className="container text-center pt-5 mt-5 " onSubmit={(e)=>handleSubmit(e)}>
    <div className="row g-2">
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' placeholder='Add FullName'value={name} onChange={(event)=>setName(event.target.value)}/></div>
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' placeholder='Add Tel'value={telephone} onChange={(event)=>setTelephone(event.target.value)}/></div>
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' placeholder='Add Email'value={Email} onChange={(event)=>setEmail(event.target.value)}/></div>
      <button className="btn btn-warning  w-25 mx-auto" type='submit' disabled={disabled()}>ADD ITEMS</button>
    </div>
  </form>
  )
}

export default AddTodo





