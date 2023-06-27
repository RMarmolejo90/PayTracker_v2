import React from 'react'
import { NavLink } from "react-router-dom";
import Home from '../pages/Home';
import PayTracker from '../pages/PayTracker';

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between p-6 min-w-screen bg-primary-gradient'>
        <h1 className='font-semibold tracking-wider text-zinc-800 text-lg px-6 mr-auto'>Rich Marmolejo</h1>
        <ul className='flex flex-row justify-between'>
            <li className='px-6'>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? 'text-zinc-700 px-4 py-2 border-b-2 rounded-xl' : 'text-blue-500'}>
                    Home
                </NavLink>
            </li>
            <li className='px-6'>
                <NavLink 
                    to="/PayTracker"
                    className={({ isActive }) => isActive ? 'text-zinc-700 px-4 py-2 border-secondary-gradient rounded-xl' : 'text-blue-500'}>
                    PayTracker
                </NavLink>
            </li>
            <li className='px-6'>
                <NavLink 
                    to="/Dev"
                    className={({ isActive }) => isActive ? 'text-zinc-700 px-4 py-2 border-secondary-gradient rounded-xl' : 'text-blue-500'}>           
                    Development
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
