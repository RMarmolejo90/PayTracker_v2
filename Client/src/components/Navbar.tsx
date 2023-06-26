import React from 'react'
import { Link } from "react-router-dom";
import Home from '../pages/Home';
import PayTracker from '../pages/PayTracker';

export default function Navbar() {
  return (
    <div>
        <h1>Rich Marmolejo</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/PayTracker">PayTracker</Link>
            </li>
            <li>
                <Link to="/Dev">Development</Link>
            </li>
        </ul>
    </div>
  )
}
