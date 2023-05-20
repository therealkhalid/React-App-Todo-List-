import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editEmployee } from '../redux/actions'

function EditContact() {
    const para=useParams();
    const navigate=useNavigate();
    const infoContact=useSelector(state=>state[para.id-1])
    const refFullName=useRef(null)
    const refEmail=useRef(null)
    const refTel=useRef(null)
    const dispatch=useDispatch()
    const handelEdit=()=>{
        dispatch(editEmployee({
            id:parseInt(para.id),
            fullName:refFullName.current.value,
            email:refEmail.current.value,
            tel:refTel.current.value,
        }))
        navigate('/')
    }
  return (
    <form className="container text-center pt-5 mt-5 " >
    <div className="row g-2">
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' defaultValue={infoContact.fullName} placeholder='Add FullName' ref={refFullName}/></div>
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' defaultValue={infoContact.email} placeholder='Add Tel' ref={refEmail}/></div>
      <div className="col-4 mx-auto"><input type='text' className='form-control w-100' defaultValue={infoContact.tel} placeholder='Add Email' ref={refTel}/></div>
      <button className="btn btn-warning  w-25 mx-auto" type='button' onClick={()=>handelEdit()}>UPDATE ITEMS</button>
    </div>
  </form>
  )
}

export default EditContact