import { useEffect, useState } from 'react';
import { useTrackerContext } from '../utils/useTrackerContext';
import * as React from 'react';
import BasicTimer from '../components/Timer';
import BasicNet from '../components/BasicComponents/BasicNetPay';
import BasicReset from '../components/BasicComponents/BasicReset';

export default function PayTrackerBasic() {
  const { displayNet, grossPay, isActive, submittedRate, elapsedTime, setSubmittedRate, setDisplayNet, setGrossPay, setIsActive, setElapsedTime} = useTrackerContext();
  const [inputRate, setInputRate] = useState(0);
  const [startTime, setStartTime] = useState<number | undefined>(localStorage.getItem('startTime') ? JSON.parse(localStorage.getItem('startTime')!) : undefined);  
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = Math.floor(elapsedTime % 60);
  const storedNetPay = localStorage.getItem('netPay');
  const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');
  const netPayNumberType = parseFloat(storedNetPay!);
  
  
  // timer function  
  // this counts elapsed time
  const storedTime: string | null = localStorage.getItem('startTime');
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive && storedTime !== null) {
        const parsedStartTime: number = +storedTime!;
        const currentTimeStamp: number = Math.floor(new Date().getTime());
        const elapsedTimeInSeconds: number = (currentTimeStamp - parsedStartTime) / 1000;
        setElapsedTime(prevElapsedTime => prevElapsedTime + elapsedTimeInSeconds);
        console.log(`storedTime: ${storedTime} & ${parsedStartTime}, currentTime: ${currentTimeStamp}`);
        console.log(`elapsed time: ${elapsedTime}, timeInSeconds ${elapsedTimeInSeconds}`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive]);

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
      localStorage.setItem('activeTimer', JSON.stringify(false));
      localStorage.removeItem('startButton');
      console.log("timer is not active");
  }

  const handleStartClick: () => void = () => {
    setIsActive(true);
    const newStartTime: number = new Date().getTime();
    setStartTime(newStartTime);
    localStorage.setItem('startTime', JSON.stringify(newStartTime));
    localStorage.setItem('activeTimer', JSON.stringify(true));
    localStorage.setItem('startButton', "Stop");
    console.log("timer-active");
    console.log("startTime : ", startTime);
  }
 // this calculates the hourly pay into seconds
// THIS IS CURRENTLY BEING HANDLED IN TRACKERCONTEXT

//  useEffect(() => {
//   let interval: NodeJS.Timeout | null = null;
//   if (isActive) {
//     interval = setInterval(() => {
//       setGrossPay(+localStorage.getItem('timeElapsed')! * payPerSecond);
//     }, 1000);
//   }
//   return () => {
//     if (interval) {
//       clearInterval(interval);
//     }
//   };
// }, [submittedRate, isActive]);

// end pay calculation

const placeholderText = "Pay Rate : " + submittedRate;

// handles the form         

const handleRate = (event: React.ChangeEvent<HTMLInputElement>) => {      
    setInputRate(parseFloat(event.target.value));
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 event.preventDefault();
 console.log(`hourly rate is ${inputRate}`);
 setSubmittedRate(inputRate);
 setInputRate(0);
 localStorage.setItem('activeSubmittedRate', JSON.stringify(inputRate));
}

  
  return (
    
    <div className='p-8'>
            <h1 className='text-3xl pb-10 text-center text-blue-400 border-b-2 border-orange-500 font-tilt'>Pay-Tracker Basic</h1>
            <div className='flex flex-wrap flex-col md:flex-row flex-auto justify-around items-center p-6'>
                <h2 className='text-2xl font-semibold m-6'>
                    Gross: ${ grossPay.toFixed(2) }
                </h2>

                {displayNet != null ? <h2 className='text-2xl font-semibold m-6'>
                    Net: ${ displayNet.toFixed(2) }
                </h2> :
                <div className='hidden'></div>
                }
                { (activeSubmittedRate != null) ? <BasicTimer
                    hours = { hours }
                    minutes = { minutes }
                    seconds = { seconds }
                    handleStopClick = { handleStopClick }
                    handleStartClick = { handleStartClick }
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
                        <BasicNet />
                    </div>
                <BasicReset />
            </div>  
        </div>
  )
}
