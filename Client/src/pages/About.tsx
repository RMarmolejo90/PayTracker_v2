
export default function About() {
  return (
    <div className="p-2 lg:p-8 lg:py-12 flex flex-col items-center justify-center bg-zinc-100">
        <h1 className="p-6 font-bold text-2xl text-sky-600">The Paytrack App</h1>
        <div className="py-6 flex flex-col justify-center lg:items-center">
          
          <p className='text-xl p-2'>
            Hi! My name is Rich. I like building software programs that help make our daily lives easier and more productive, and I'm also an experienced HVAC Technician. I always used to track my work hours and write them down in a notepad. After my shift or at the end of the week, I would add up all of my hours, calculate my deductions, and estimate what my paycheck might look like. So eventually I thought it be great if I could just clock in and out on an app that would show me these calculations in real-time. 
          </p>
          <p className='text-lg p-2 mb-4'>
            It motivates me throughout the week to check on my progress, but also it's helpful to double check the payroll accuracy. Many of my previous jobs actually recommended that I track my own hours just to make sure payroll is getting it right. Often enough I did notice some mistakes that I wouldn't have caught, had I not been keeping track of my hours. This was pretty common actually. So that's where the idea originated, and this is the software solution I came up with. I hope you enjoy it!
          </p>
          <h2 className="mt-4 p-2 lg:p-4 text-2xl font-semibold text-sky-600">
            How To Use
          </h2>
          <p className="text-lg p-2">
            This application is designed to give you a quick estimation of your wages accumulated during your shifts, updated in real time. It's not crafted to mirror the exact accuracy of payroll services. Starting with a base deduction rate of 20%, the app allows for adjustments to better match the deduction percentages from your paycheck. What sets this app apart is its capability to show your earnings in real time, for both the current shift and the entire week, making it easier to clock in and out with a clear understanding of your financial gain. Though not aimed at delivering perfect paycheck estimates, the application strives to provide a close approximation, very near to your actual paycheck figures. With the understanding that deductions and pay structures differ greatly, this app focuses on simplifying the tracking of work hours and estimating earnings accurately. Additionally, it acts as a motivational factor, encouraging you by showing the tangible results of your work hours.          
          </p>
          <p className="text-lg p-2">
            Select your deduction rate and enter your hourly wage into the input field, then hit start. This action kicks off the timer, and you'll start seeing your paycheck amount accumulate in real time. Feel free to set aside your device or computer and check back later; you can even close the app and reopen it at the end of your shift—the timer will keep running. However, note that pausing the timer isn't an option; a pause feature hasn't been added, primarily because it's not something I see myself using. For those using the Pro version, pressing stop saves your shift details to your work history, a handy feature for keeping accurate records. Users of the basic version should be aware that the timer resets to zero upon stopping, so it's wise to jot down your time before ending your shift if you need to keep track manually. Overall, for a more comprehensive experience, I'd suggest opting for the Pro version.          
          </p>
        </div>
        <div className="flex flex-col justify-center lg:items-center">
          <h2 className="p-2 lg:p-4 text-2xl font-semibold text-sky-600">
            Technology Stack
          </h2>
          <div>
            <h3 className="text-xl font-semibold p-2">
            Front End:
            </h3>
            <p className="text-lg p-2">
              For the front end, the app uses React, with Vite helping speed up both development and deployment. Authentication involves custom-built sign-up and registration forms. To minimize user errors and enhance security, input validation is managed with Formik and Yup. The design is mobile-first, styled with Tailwind CSS for a sleek, responsive user interface.            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold p-2">
              Back End:
            </h3>
            <p className="text-lg p-2">
            The back end is powered by a NodeJs Express server, which interacts with a MongoDB database. This setup includes a REST API and various database models to facilitate CRUD operations, crucial for managing user authorization/authentication and handling operations specific to the Pro version users. The custom authentication system employs JSON web tokens and end-to-end encryption for security. To ensure persistent user sessions, data is stored both client-side and in the database.            
            </p>
          </div>
        </div>       
    </div>
  )
}
