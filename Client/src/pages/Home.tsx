import richImage from '../assets/rich.webp';
export default function Home() {
  return (
    <div className="flex flex-row flex-wrap flex-shrink items-center justify-evenly p-6 text-slate-200">
      <div className="flex flex-col flex-wrap items-between justify-start max-w-xl md:m-2">
        <h1 className="text-3xl lg:text-4xl font-semibold p-3 tracking-wide">
          Engineering Full-Stack Software Solutions       
        </h1>
        <div className="p-2 max-w-md py-4 text-lg">
          <p className='p-1'>
          "The only way to do great work, <br/> is to love what you do."        
          </p>
          <p className='p-1'>
            - Steve Jobs 
          </p>
        </div>
      </div>
      <img className="max-w-xs lg:max-w-sm md:m-2 rounded-full bg-[#D3C718]" src={richImage} alt="Rich Marmolejo himself" />
      <section className='lg:m-10 m-6 lg:p-8 p-4 bg-secondary-gradient text-slate-300 border border-slate-950 rounded-md'>
      <h3 className='p-4 font-semibold text-lg'>Welcome to RichMarmolejo.com</h3>
      <p className='p-4'>
      Hey! My name is Rich. I enjoy developing software programs that make our daily lives easier and more productive. I am also an HVAC Technician. Working on the road as a technician, I would often find myself tracking my work hours and writing them down in a notepad. After my shift I would add up my hours, calculate my deductions and estimate what my paycheck might look like. So then I thought, wouldn't it be great if I could clock in and out on an app that would show me these calculations in real-time? I find it motivating throughout the week to check on my progress, but also helpful to double check the payroll accuracy. So this is what I came up with.
      </p>
      <p className='p-4'>
      If you plan to use the tracker to save your work history, feel free to create a user account. The Pro version will save all the data to a database for you. If you just want to check your work hours and pay calculations in real-time, you can do that from either the basic or the pro versions. Thanks you for trying it out, I hope you find it useful. If you have any questions or feedback, please don't hesitate to reach out to me. I try to provide prompt responses, typically within 24 hours.
      </p>
      <div className='flex items-center justify-center'>
        <a className='text-center m-8 rounded-md hover:bg-yellow-400 p-2 bg-yellow-500 text-slate-950 font-semibold tracking-wider' href="mailto:richardmarmolejo@gmail.com">CONTACT ME HERE</a>
      </div>
      </section>
    </div>
  )
}
