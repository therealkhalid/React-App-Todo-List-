export const addTodo=(Data)=>{
    return{
        type: 'ADD_TODO',
        payload:Data
    }
}

export const deleteAll = () =>{
    return{
        type: 'DELETE_ALL'
    }
}

export const removeTodo=(payload)=>{
    return{
        type: 'REMOVE_TODO',
        payload
    }
}
export function editEmployee(data) {
      return {
        type: "EDIT_EMPLOYEE",
        payload: data
    };
  }



