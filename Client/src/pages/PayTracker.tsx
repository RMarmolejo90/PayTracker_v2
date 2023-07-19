import { useEffect, useState } from 'react';
import { useTrackerContext } from '../utils/useTrackerContext';

export default function PayTracker() {
  const { displayNet, grossPay, isActive, elapsedTime, setDisplayNet, setGrossPay, setIsActive, setElapsedTime} = useTrackerContext();
  const [inputRate, setInputRate] = useState('');
  const [submittedRate, setSubmittedRate] = useState (
    isActive && localStorage.getItem('activeSubmittedRate') !== null ? localStorage.getItem('activeSubmittedRate')! : '0'
  );
  
  // defines time
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const storedNetPay = localStorage.getItem('netPay');
  const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');
  const payPerSecond: number = (parseFloat(submittedRate) / 3600);
  const netPayNumberType = parseFloat(storedNetPay);
  
    // updates the displayNet state with netpay from local storage
    // this is used to upadate the displayed net pay on the page

    useEffect (() => {
      if (netPayNumberType != null)
      setDisplayNet(netPayNumberType);
  }, [netPayNumberType]);
  
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
  let interval: string | number | NodeJS.Timeout | null | undefined = null;
  if (isActive){
      interval = setInterval(() => {
          setGrossPay(localStorage.getItem('timeElapsed') * payPerSecond);
      }, 1000);
      return () => clearInterval(interval);
      }
}, [submittedRate, isActive]);
// end pay calculation

const placeholderText = "Pay Rate : " + submittedRate;

// handles the form         

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
                { (activeSubmittedRate != null) ? <Timer
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
