import { NavLink } from "react-router-dom";
import { useAuthContext } from "../utils/useAuthContext";


export default function Navbar() {
    const { authorized } = useAuthContext();


  return (
    <div className='flex flex-row flex-wrap items-center justify-center md:justify-normal p-2 w-screen  bg-slate-950 text-center'>
            <div className="flex-wrap-reverse flex justify-center items-center md:items-evenly md:justify-center md:flex-grow tracking-wide uppercase text-center">           
                <ul className='flex flex-row justify-between text-md m-4 text-center'>
                    <li className='px-2'>
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>
                            Home
                        </NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink 
                            to="/PayTracker"
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>
                            PayTracker
                        </NavLink>
                    </li>
                    <li className='px-2'>
                        <NavLink 
                            to="/About"
                            className={({ isActive }) => isActive ? 'text-blue-400 py-2 border-b-2 border-blue-400' : 'text-sky-200 hover:text-sky-50'}>           
                            About
                        </NavLink>
                    </li>
                    
                </ul>
            
                <div className='flex flex-wrap sm:p-2 text-sm tracking-wide text-sky-200 max-w-max text-center md:text-right md:ml-0'>
                  {
                   // eslint-disable-next-line no-constant-condition
                   (authorized === true) ?
                   (<NavLink 
                    to="/Logout"
                    className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-6' : 'text-sky-200 m-2 hover:cursor-pointer hover:text-sky-50'}>           
                    Sign out
                    </NavLink>)
                    :
                    (<NavLink 
                        to="/Login"
                        className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-6' : 'text-sky-200 m-6 hover:cursor-pointer hover:text-sky-50 text-xs lg:text-sm'}>           
                        Sign in  
                    </NavLink>)}

                    <NavLink 
                        to="/Register"
                        className={({ isActive }) => isActive ? 'text-blue-400 border-b-2 border-blue-400 m-6' : 'text-sky-200 m-6 hover:cursor-pointer hover:text-sky-50 text-xs lg:text-sm'}>           
                        New User
                    </NavLink>
                </div>
            </div>
        </div>
  )
}
