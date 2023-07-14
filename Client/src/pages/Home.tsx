import richImage from '../assets/rich.webp';
export default function Home() {
  return (
    <div className="flex flex-row flex-wrap flex-shrink items-center justify-around p-6 text-slate-200">
      <div className="flex flex-col flex-wrap items-between justify-start max-w-sm md:m-2">
        <h1 className="text-xl lg:text-3xl font-bold p-3">
          Expert HVAC Technician,
          Full-Stack Software Developer.       
        </h1>
        <div className="p-3">
          <p>
            "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
          </p>
          <p>
            -Michelangelo
          </p>
        </div>
      </div>
      <img className="max-w-sm md:m-2 rounded-full" src={richImage} alt="Rich Marmolejo himself" />
    </div>
  )
}
