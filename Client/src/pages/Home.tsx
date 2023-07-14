import richImage from '../assets/rich.webp';
export default function Home() {
  return (
    <div className="flex flex-row flex-wrap flex-shrink items-center justify-evenly p-6 text-slate-200">
      <div className="flex flex-col flex-wrap items-between justify-start max-w-md md:m-2">
        <h1 className="text-2xl lg:text-3xl font-bold p-2 tracking-wide leading-relaxed">
          Expert HVAC Technician &
          Full-Stack Software Developer.       
        </h1>
        <div className="p-2 max-w-sm py-4">
          <p className='p-1'>
          "The only way to do great work, <br/> is to love what you do."        
          </p>
          <p className='p-1'>
            - Steve Jobs 
          </p>
        </div>
      </div>
      <img className="max-w-sm lg:max-w-md md:m-2 rounded-full bg-slate-400" src={richImage} alt="Rich Marmolejo himself" />
      <section className='m-10 p-8 bg-secondary-gradient text-slate-300 border border-slate-950 rounded-md'>
      <p className='p-4'>
      Welcome to my website. Here, you'll find information about my expertise as an HVAC technician and my experience as a full-stack software developer. This platform also serves as a hub for my PayTracker app, which is free to use. Stay tuned for exciting updates as this website continues to grow.
      </p>
      <p className='p-4'>
      If you'd like to try out the PayTracker app, feel free to create a user account. For any questions or concerns, please don't hesitate to reach out to me. I try to provide prompt responses, typically within 24 hours.
      </p>
      <div className='flex items-center justify-center'>
        <a className='text-center m-8 rounded-md hover:bg-amber-400 p-2 bg-amber-500 text-slate-950 font-semibold tracking-wider' href="mailto:richardmarmolejo@gmail.com">CONTACT ME HERE</a>
      </div>
      </section>
    </div>
  )
}
