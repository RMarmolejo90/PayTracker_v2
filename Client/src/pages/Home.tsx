import richImage from '../assets/rich.webp';
export default function Home() {
  return (
    <div className="flex flex-row flex-wrap flex-shrink items-center justify-evenly p-6 text-slate-200">
      <div className="flex flex-col flex-wrap items-between justify-start max-w-md md:m-2">
        <h1 className="text-xl lg:text-3xl font-bold p-3 tracking-wide leading-relaxed">
          Expert HVAC Technician &
          Full-Stack Software Developer.       
        </h1>
        <div className="p-3 max-w-sm ">
          <p className='p-2'>
          "The only way to do great work, <br/> is to love what you do."        
          </p>
          <p className='p-2'>
            - Steve Jobs 
          </p>
        </div>
      </div>
      <img className="max-w-sm lg:max-w-md md:m-2 rounded-full" src={richImage} alt="Rich Marmolejo himself" />
    </div>
  )
}
