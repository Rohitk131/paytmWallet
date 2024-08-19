import Navbar from '../components/navbar'; 
import Balance  from '../components/balance';
import User from '../components/User'; 
export default function Dashboard(){
    return(
        <div className='bg-slate-950'>
        <Navbar/>
        <Balance/>
        <User/>
        </div>
    )
}; 