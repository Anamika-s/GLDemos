import { useDispatch, useSelector } from "react-redux"
import {actionCreators} from './actions/index';
export   default  function Shop()
{
  const dispatch = useDispatch();
  const amount = useSelector(state=>state.amount)
  return (
    <div>
        <h1> Deposit / Withraw Money {amount} </h1>
        <button onClick={()=> dispatch(actionCreators.depositMoney(100))}> Deposit </button>
        <button onClick={()=> dispatch(actionCreators.withdrawMoney(10))}> Withdraw </button>
    </div>
  )
} 