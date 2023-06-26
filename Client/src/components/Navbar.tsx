import React from 'react'
import { NavLink } from "react-router-dom";
import Home from '../pages/Home';
import PayTracker from '../pages/PayTracker';

export default function Navbar() {
  return (
    <div>
        <h1>Rich Marmolejo</h1>
        <ul>
            <li>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? 'text-red-500' : 'text-blue-500'}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/PayTracker"
                    className={({ isActive }) => isActive ? 'text-red-500' : 'text-blue-500'}>
                    PayTracker
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to="/Dev"
                    className={({ isActive }) => isActive ? 'text-red-500' : 'text-blue-500'}>           
                    Development
                </NavLink>
            </li>
        </ul>
    </div>
  )
}
