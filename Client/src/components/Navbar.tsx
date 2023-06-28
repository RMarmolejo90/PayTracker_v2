import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Home from '../pages/Home';
import PayTracker from '../pages/PayTracker';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between p-2 min-w-full bg-slate-200'>
        <div className='flex items-start flex-col'>
            <h1 className='tracking-widest text-zinc-700 text-lg px-6 mr-auto'>RichMarmolejo.com</h1>
            <ul className='flex flex-row justify-between text-xs m-4 tracking-wide'>
                <li className='px-2'>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => isActive ? 'text-zinc-800 py-2 border-b-2' : 'text-orange-700'}>
                        Home
                    </NavLink>
                </li>
                <li className='px-2'>
                    <NavLink 
                        to="/PayTracker"
                        className={({ isActive }) => isActive ? 'text-zinc-400 py-2 border-b-2' : 'text-orange-700'}>
                        PayTracker
                    </NavLink>
                </li>
                <li className='px-2'>
                    <NavLink 
                        to="/Dev"
                        className={({ isActive }) => isActive ? 'text-zinc-400 py-2 border-b-2' : 'text-orange-700'}>           
                        Development
                    </NavLink>
                </li>
            </ul>
        </div>
        <div className='flex flex-wrap p-2 text-xs tracking-wide text-amber-500'>
            <Link className='mx-2' to="/Login">Log In</Link>
            <Link className='mx-2' to="/Register">Register</Link>
        </div>
    </div>
  )
}
