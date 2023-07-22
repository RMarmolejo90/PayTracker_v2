
export default function Hvac() {
  return (
    <div className="bg-primary-gradient">
      <div className="bg-[url('../src/assets/HeatPump1.webp')] bg-cover bg-no-repeat min-w-full flex items-start justify-center p-10 min-h-[80vh] bg-center">      
        <div className="p-10 text-4xl font-semibold backdrop-contrast-150 backdrop-brightness-50 text-slate-100 flex flex-col items-center">
          <h1 className="m-3 text-4xl">Professional HVAC Service Technician</h1>
          <h3 className="m-3 text-3xl">Residential and Light Commercial</h3>
          <a className="p-3 text-slate-950 m-3 tracking-wider text-sm font-semibold bg-yellow-500 hover:bg-yellow-400 rounded-md" href="mailto:richardmarmolejo@gmail.com">Contact Me</a>
        </div>        
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-20 bg-slate-100">

        <div className="flex flex-wrap items-center justify-between p-2 py-4 m-8">
          <div className="p-4 lg:max-w-lg max-w-sm text-lg text-slate-700 flex flex-col flex-wrap items-center justify-between">

            <div className="flex flex-wrap flex-col items-center justify-center">
              <h1 className="text-6xl text-center backdrop-grayscale p-6 font-bold lg:mb-[-100px]  bg-clip-text text-transparent bg-primary-gradient">My HVAC Story</h1>
              <img className="lg:max-w-lg max-w-xs lg:mx-4" src="../src/assets/RichHVAC.jpg" alt="Close-up, smiling at the camera standing on top of a building in Philadelphia" />
            </div>

            <p className="mt-6 m-4 p-4 max-w-xl lg:m-0 lg:mt-6 lg:p-0">For nearly a decade, I have passionately dedicated myself to tackling only the most difficult and complicated HVAC service calls. I deliberately chose to focus exclusively on these challenging assignments, which allowed me to gain invaluable experience and expertise in handling intricate scenarios. I also took on the responsibility of a training manager and field supervisor, mentoring and guiding aspiring technicians on their paths to success. This unwavering commitment to excellence has shaped me into the skilled HVAC technician I am today. 
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="bg-slate-50 text-slate-700 p-4 m-4">
            <p className="p-6 my-2 max-w-xl">
            <span className="text-lg font-semibold text-blue-800">My journey</span> as an HVAC Technician has been marked by continuous learning and perseverance. I completely immersed myself into the complexities of this field, constantly seeking to improve. Challenges were not something to fear; they were opportunities to grow. I pursued these challenges and, in return, gained invaluable knowledge and experience.
            </p>
          </div>
          <div className="bg-slate-50 text-slate-700 p-4 m-4">
            <p className="p-6 my-2 max-w-xl">
            <span className="text-lg font-semibold text-blue-800">Today</span>, I stand as a seasoned technician, driven by a genuine passion for my craft. The multitude of experiences and expertise I've gathered over the years has sculpted me into the professional I am today. I take great pride in my ability to provide top-notch solutions and service to clients, backed by the wealth of knowledge I've amassed.
            </p>
          </div>
          <div className="bg-slate-50 text-slate-700 p-4 m-4">
            <p className="p-6 my-2 max-w-xl">
            <span className="text-lg font-semibold text-blue-800">As I move forward</span> in my journey, I remain committed to honing my skills and embracing new challenges that come my way. HVAC is more than just a profession; it's my life's work, and I'm dedicated to leaving a lasting impact through my dedication, expertise, and unwavering pursuit of excellence.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
