
export default function Home() {
  return (
    <div className="flex flex-row items-between justify-center">
      <div className="flex flex-col items-between justify-start">
        <h1 className="text-3xl font-bold">
          Expert HVAC Technician.
          Professional Software Developer.       
        </h1>
        <div>
          <p>
            "The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it."
          </p>
          <p>
            -Michelangelo
          </p>
        </div>
      </div>
      <img className="max-w-md rounded-full" src="../assets/rich.webp" alt="Rich Marmolejo himself" />
    </div>
  )
}
