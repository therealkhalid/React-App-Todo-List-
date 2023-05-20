
const initialState = [
    {id: 1, fullName: 'Mohamed Ait Hani', tel: "0623514524", email: "mohamed@gmail.com"},
    {id: 2, fullName: 'Abdo Ait Ali', tel: "0622365262", email: "abdo@gmail.com"},
    {id: 3, fullName: 'Fatima Ait Ahmed', tel: "0623523658", email: "fatima@gmail.com"}
    ]
    

const TodoReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload];
        case 'DELETE_ALL':
            return [];
        case 'REMOVE_TODO':
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
            // case "EDIT_EMPLOYEE":
            //     return produce(state,draft=>{
            //         draft.map((contact)=>{
            //             if(contact.id===action.payload.id){
            //                 contact.fullName=action.payload.fullName;
            //                 contact.tel=action.payload.tel;
            //                 contact.email=action.payload.email;
            //             }
            //         })
            //     })
            case "EDIT_EMPLOYEE":
                return state.map((contact)=>{
                    if(contact.id===action.payload.id){
                        contact.fullName=action.payload.fullName;
                        contact.tel=action.payload.tel;
                        contact.email=action.payload.email;
                    }
                    return contact;
                })
            
        
        default: return state;
    }
}
export default TodoReducer
