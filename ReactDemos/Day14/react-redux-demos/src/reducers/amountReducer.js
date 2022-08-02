const init =100;
const amountreducer = (state = init , action)=>
{
  if(action.type==='deposit')
  return state+action.payload;
  else if(action.type==='withdraw')
  return state-action.payload;
  else 
  return state;
}

export default amountreducer;