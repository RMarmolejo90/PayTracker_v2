import { useNavigate } from 'react-router-dom';


export default function Logout() {
    
    const navigate = useNavigate();
    const logout = async () => {
        try{
        localStorage.clear();
        alert("Successfully logged out");
        navigate('../');
        } catch (error){
            console.error(error);
        }
    }

  return (
    <div className='flex items-center justify-center'>
        <form className='flex flex-col items-center justify-center' action="logout">
            <h3 className='m-6 '>Logout?</h3>
            <button className='m-6 p-4 px-6 bg-red-700 hover:bg-red-500' type='button' onClick={logout}>Logout</button>
            <a className='m-6 p-4 px-6 bg-slate-400 hover:bg-slate-200' href="/">Home</a>
        </form>
    </div>
  )
}
