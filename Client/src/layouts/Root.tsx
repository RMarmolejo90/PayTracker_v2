import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <div className='bg-primary-gradient  h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}
