export const initialState ={
  name:"Deepak",
  age : 20
}

export type actionType={
type: 'UPDATE_NAME',
payload: string
} |
{
 type:'UPDATE_AGE',
 payload:number
}

export const reducer = (state : typeof initialState, action: actionType)=>
{

if(action.type=="UPDATE_NAME"){
return {
 ...state, 
 name:action.payload
}
}

if(action.type=="UPDATE_AGE"){
return {
 ...state, 
age:action.payload
}
}
return state;
}
