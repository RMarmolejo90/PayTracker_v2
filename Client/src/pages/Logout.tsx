import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../utils/useAuthContext';

export default function Logout() {
    const {logout} = useAuthContext()
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try{
        localStorage.clear();
        logout();
        alert("Successfully logged out");
        navigate('../');
        } catch (error){
            console.error(error);
        }
    }

  return (
    <div className='flex items-center justify-center font-bold'>
        <form className='my-6 flex flex-col items-center justify-center' action="logout">
            <h3 className='m-6 text-4xl uppercase text-slate-300'>Logout?</h3>
            <button className='m-6 p-4 px-6 border-slate-200 border text-slate-200 bg-slate-800 hover:bg-red-600 rounded-xl tracking-wider text-xl' type='button' onClick={logoutHandler}>Logout</button>
            <a className='m-6 p-4 px-6 bg-slate-50 border-slate-950 border hover:bg-neutral-300 text-slate-950 rounded-xl tracking-wider text-xl' href="/">Home</a>
        </form>
    </div>
  )
}
