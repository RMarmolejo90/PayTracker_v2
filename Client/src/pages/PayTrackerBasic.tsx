import { useTrackerContext } from "../utils/useTrackerContext"
import { useState, useEffect, } from "react"



export default function PayTracker() {
  const { isActive, displayNet, grossPay, elapsedTime } = useTrackerContext();
  
    // handles the form         
    const [inputRate, setInputRate] = useState('');
    const [submittedRate, setSubmittedRate] = useState (
        isActive ? localStorage.getItem('activeSubmittedRate') : 0 
    );

    const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');
    const payPerSecond:number = (submittedRate / 3600);

    const handleRate = (event) => {      
        setInputRate(event.target.value)
    }
    
   const handleSubmit = (event) => {
     event.preventDefault();
     console.log(`hourly rate is ${inputRate}`);
     setSubmittedRate(inputRate);
     setInputRate("");
     localStorage.setItem('activeSubmittedRate', inputRate);
     console.log('per second = ' + payPerSecond , 'gross = ' + grossPay);
   }

   // handles retrieving data from local storage on page reload
   // right now it only retrieves the timers isActive state
   
    useEffect(() => {
        setIsActive(localStorage.getItem('activeTimer'));
        
        if (isActive === true){
            setSubmittedRate(localStorage.getItem('activeSubmittedRate'));
        }

        console.log("isActive : " + isActive);
        
    },[]);
  
  
    // handles timer button
    // Start or stop the timer

    const handleStopClick = () => {
        setIsActive(false);
        setElapsedTime(0);
        localStorage.removeItem('startTime');
        localStorage.setItem('activeTimer', false);
        localStorage.removeItem('startButton');
        console.log("timer is not active");
    }

    const handleStartClick = () => {
        setIsActive(true);
            setStartTime(new Date().getTime());
            localStorage.setItem('startTime', new Date().getTime());
            localStorage.setItem('activeTimer', true);
            localStorage.setItem('startButton', "Stop");
            console.log("timer-active");
            console.log("startTime : ", startTime);
    }
    // this calculates the hourly pay into seconds
  

    useEffect(() => {
      let interval = null;
      if (isActive){
          interval = setInterval(() => {
              setGrossPay(localStorage.getItem('timeElapsed') * payPerSecond);
          }, 1000);
          return () => clearInterval(interval);
          }
  }, [submittedRate, isActive]);
  // end pay calculation

  // defines time
  
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;

  const placeholderText = `Pay Rate: ${submittedRate.toFixed(2)}`;

  return (
    <div className='p-8'>
            <h1 className='text-3xl pb-10 text-center text-blue-400 border-b-2 border-orange-500 font-tilt'>Real-Time Pay Tracker</h1>
            <div className='flex flex-wrap flex-col md:flex-row flex-auto justify-around items-center p-6'>
                <h2 className='text-2xl font-semibold m-6'>
                    Gross: ${ grossPay.toFixed(2) }
                </h2>

                {displayNet != null ? <h2 className='text-2xl font-semibold m-6'>
                    Net: ${ displayNet.toFixed(2) }
                </h2> :
                <div className='hidden'></div>
                }
                { activeSubmittedRate > 0 ? <Timer
                    hours = { hours }
                    minutes = { minutes }
                    seconds = { seconds }
                    handleStopClick = { handleStopClick }
                    handleStartClick = { handleStartClick }
                    isActive = { isActive }
                /> : <div className="hidden">Submit your hourly pay rate</div>}
            </div> 
            <div className='flex flex-auto flex-col flex-wrap justify-center items-center'> 
                    <div className='border-zinc-700 border-4 p-6 flex flex-auto flex-col flex-wrap justify-center items-end m-6'>
                        <h3 className='mr-6'>
                            Hourly Rate: ${ activeSubmittedRate }
                        </h3>
                        <form className='outline-slate-600 m-6 flex flex-auto flex-col justify-center items-end' onSubmit={ handleSubmit }>
                            <input 
                            className='text-slate-600 bg-slate-50 rounded-sm py-1.5 px-3 lg:mr-4 my-3 '
                            placeholder = {placeholderText}
                            min = "0"
                            type="number"
                            step="0.01" 
                            value={ inputRate } 
                            onChange={ handleRate } 
                            />
                            <button className=' my-3 bg-blue-500 border-slate-500 rounded-md text-slate-100 font-semibold p-1.5' type="submit">Submit</button>
                        </form>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <Net 
                            grossPay = {grossPay}
                        />
                    </div>
                <Clear />
            </div>  
        </div>
    )
}

function setIsActive(arg0: string | null) {
  throw new Error("Function not implemented.");
}

function setElapsedTime(arg0: number) {
  throw new Error("Function not implemented.");
}

function setStartTime(arg0: number) {
  throw new Error("Function not implemented.");
}

function setGrossPay(arg0: number) {
  throw new Error("Function not implemented.");
}

