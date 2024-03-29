
export default function About() {
  return (
    <div className="p-2 lg:p-8 lg:py-12 flex flex-col items-center justify-center bg-zinc-100">
        <h1 className="p-6 font-bold text-2xl text-sky-600">About The Paytrack App</h1>
        <div className="py-6 flex flex-col justify-center lg:items-center">
          <h2 className="p-2 lg:p-4 text-2xl font-semibold text-sky-600">
            How To Use
          </h2>
          <p className="text-lg p-2">
            The app is designed to provide a close estimation of your moneys accrued during your work shift, in real-time. It is not designed to be as accurate as your payroll. If you don't know what percentage of your check is taken out for deductions, just start with the default 20%, and adjust it from there until you find a close match.
          </p>
          <p className="text-lg p-2">
            Select your deductions amount. Enter your hourly rate in the input field, and then click start. This will start the timer, and you will immediately begin to see the paycheck in real-time. You can put your device or computer away and come back to it later. You can even close the app and return at the end of your shift, and the timer will continue. However, you cannot pause the timer. I have not implemented a pause feature yet, and I'm not sure that I will because I just wouldn't use it. If you are logged into the pro version, then when you click stop it will save the shift data to your work history. If you're using the basic version however, the timer will return to zero when you click stop. So Write down the time before you click the stop button If you're tracking the time. Overall, I would recommend using the Pro version.
          </p>
        </div>
        <div className="p-6 flex flex-col justify-center lg:items-center">
          <h2 className="p-2 lg:p-4 text-2xl font-semibold text-sky-600">
            Technology Stack
          </h2>
          <div>
            <h3 className="text-xl font-semibold p-2">
            Front End:
            </h3>
            <p className="text-lg p-2">
              I used React Library for the javascript front end. Included Vite as a build tool to assist in faster development and deployment. For authentication I built custom authentication and authorization with customer sign up and register forms. In order to reduce the chance of user errors and for better security, I used Formik and Yup for input validation checking. The application was styled with a mobile-first approach using Tailwind CSS.  
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold p-2">
              Back End:
            </h3>
            <p className="text-lg p-2">
              Developed a NodeJs Express server to power the back end, and iteract with a Mongodb database. The server consists of a REST API and various database models, for CRUD operations in both user authorization/authentication, and the Pro version user operations. The custom authentication system uses JSON web tokens and end-to-end encryption. Data is stored both on the client and on the database, to create persisted user sessions.
            </p>
          </div>
        </div>       
    </div>
  )
}
