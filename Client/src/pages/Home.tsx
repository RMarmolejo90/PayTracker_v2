import { useAuthContext } from "../utils/useAuthContext";
import { NavLink } from 'react-router-dom'; // Assuming you're using react-router for navigation

const Home = () => {
  const { authorized } = useAuthContext();

  return (
    <div className="flex flex-col flex-wrap flex-shrink items-center justify-evenly p-2 text-slate-200">
      {
        !authorized ?
        (
          <div className="flex flex-col flex-wrap items-between justify-start max-w-xl md:m-2">
            <h1 className="text-3xl lg:text-4xl font-semibold p-3 tracking-wide text-blue-200 text-center">
              The PayTracker App       
            </h1>
            <div className="p-2 w-full py-4 text-xl text-center leading-8 flex flex-col items-center justify-center">
              <p className='p-2 font-semibold  w-full tracking-wider'>
                Try out the <span className='text-blue-200 uppercase'>Pro Version</span> by signing in, or creating an account! It's free, it's secure, it's just... better.        
              </p>
              <div className='m-4 flex flex-row w-full items-center justify-center'>
                <NavLink className='text-sm text-center m-3 rounded-md uppercase hover:bg-yellow-400 p-3 px-4 bg-yellow-500 text-slate-950 font-semibold tracking-wider' to="/Login">Sign In</NavLink>
                <NavLink className='text-sm text-center m-3 rounded-md uppercase hover:bg-yellow-400 p-3 bg-yellow-500 text-slate-950 font-semibold tracking-wider' to="/Register">New User</NavLink>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col flex-wrap items-between justify-start max-w-xl md:m-2">
            <h1 className="text-4xl lg:text-5xl font-bold p-3 tracking-widest text-blue-200 text-center">
              PayTracker Pro       
            </h1>
          </div>
        )
      }
      <section className='p-6 lg:m-10 lg:p-8 my-12 bg-secondary-gradient text-slate-300 border border-slate-950 rounded-lg'>
        <h3 className='p-4 font-semibold text-xl'>Welcome to PayTracker!</h3>
        <p className='p-4'>
        Hey! My name is Rich. I enjoy engineering software programs that make our daily lives easier and more productive. I am also an HVAC Technician, and for years on the road as a technician, I would find myself tracking my work hours and writing them down in a notepad. After my shift or at the end of the week, I would add up all of my hours, calculate my deductions, and estimate what my paycheck might look like. Eventually I thought, wouldn't it be great if I could clock in and out on an app that would show me these calculations in real-time? 
        </p>
        <p className='p-4'>
          It motivates me throughout the week to check on my progress, but also its helpful to double check the payroll accuracy. Many of my previous jobs actually asked me as an employee, to track my hours just to make sure payroll is getting it right. So this is the solution I came up with. 
        </p>
        <p className='p-4'>
        This application (especially in Pro Version) will allow you to keep track of your work hours with complete accuracy and control, while giving you real-time pay estimates based on your average deductions. I hope you enjoy.
        </p>
        <p className='p-4'>
        If you plan to use the tracker to save your work history, you're welcome to create a free Pro Account. The Pro version will save all of your work hours for you, so you don't have to keep track of it yourself. If you just want to check your work hours and pay calculations in real-time and don't care about tracking hours or saving info, you can do that from either the basic or the pro versions. 
        </p>
        <p className='p-4'>
        If you have any questions or feedback, please don't hesitate to reach out to me. I try to provide prompt responses, typically within 24 hours.
        </p>
        <div className='flex items-center justify-center'>
          <a className='text-center m-8 rounded-md hover:bg-yellow-400 p-6 bg-yellow-500 text-slate-950 font-semibold tracking-wider' href="mailto:richardmarmolejo@gmail.com">CONTACT ME HERE</a>
        </div>
      </section>
    </div>
  )
}

export default Home
