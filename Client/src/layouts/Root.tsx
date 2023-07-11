import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Root() {
  return (
    <div className='bg-neutral-200 bg-cover h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}
