import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className='bg-gears bg-cover h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}
