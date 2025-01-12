export type User={
    id:number,
    firstName:string,
    lastName:string,
    email:string,
    password:string,
    adress:string,
    phone:string    
}
export type Action = {
    type: 'CREATE'|'UPDATE'|'GET'|'REMOVE',
    data: Partial<User>
}
export const userReducer=(state: User, action: Action):User=>{
        switch(action.type){
        case 'CREATE':
            const { id,firstName, lastName, email,password,adress,phone} = action.data as Partial<User>               
                return {
                id:id||0,
                firstName : firstName || '',
                lastName: lastName||'',
                password: password || '',
                email:email||'',
                adress:adress||'',
                phone:phone||''
            }        
            case 'UPDATE':
            return {
                id:state.id,
                firstName:state.firstName,
                lastName: action.data.lastName || state.lastName,
                password :state.password,
                email: action.data.email || state.email,
                adress: action.data.adress || state.adress,
                phone: action.data.phone || state.phone               

            }
            default:
                return state  
    }

    
}