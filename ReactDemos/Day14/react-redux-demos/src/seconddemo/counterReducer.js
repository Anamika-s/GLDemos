export const counterReducer = (state=0 , action) =>
{
  console.log("Called Reducer")
   switch(action.type)
   {
    case "INC": return state+1;
    case "DEC" :return state-1;
    default : return state;
   }

}