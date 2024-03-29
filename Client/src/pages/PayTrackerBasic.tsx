import { useEffect, useState } from 'react';
import { useTrackerContext } from '../utils/useTrackerContext';
import * as React from 'react';
import BasicTimer from '../components/Timer';
import BasicNet from '../components/BasicComponents/BasicNetPay';
import BasicReset from '../components/BasicComponents/BasicReset';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function PayTrackerBasic() {
    const navigate = useNavigate();
  const { displayNet, grossPay, isActive, submittedRate, elapsedTime, setSubmittedRate, setDisplayNet, setGrossPay, setIsActive, setElapsedTime} = useTrackerContext();
  const [inputRate, setInputRate] = useState(0);
  const [startTime, setStartTime] = useState<number>(0);
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = Math.floor(elapsedTime % 60);
  const storedNetPay = localStorage.getItem('netPay');
  const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');
  const netPayNumberType = parseFloat(storedNetPay!);
  const placeholderText = "Pay Rate : " + submittedRate;
  const payPerSecond = Number(submittedRate / 3600);
  const activeTimer: string = localStorage.getItem('activeTimer') ?? 'false';

  // Fetch isActive status from local storage for page refresh
  useEffect(() => {
    if (activeTimer === 'true'){
        setIsActive(true);
    }
  }, []);


  useEffect(() => {
    // Define the headers for your request
    const headers = {
      authorization: localStorage.getItem('Token'),
      userId: localStorage.getItem('UserId'),
    };

    // Make an asynchronous Axios request to check authentication
    const checkAuthentication = async () => {
      try {
        const response = await axios.get('https://paytrack-backend.onrender.com/auth', {
          headers: headers,
        });
        
        const isAuthenticated = response.data.valid;

        if (isAuthenticated) {
          navigate('/PayTracker'); // Redirect to Pro version
        } else {
          navigate('/PayTracker/Basic'); // Redirect to Basic version
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuthentication();
  }, []); 


    //Update start time from local storage on mount
    useEffect(() => {
        const activeStartTime = (localStorage.getItem('startTime'));  
        if (activeStartTime !== null){
            setStartTime(+activeStartTime)}
        }, []);

    

  // timer function  
  // this counts elapsed time
  useEffect(() => {
    const interval = setInterval(() => {
      if (isActive && startTime !== 0) {
        const currentTimeStamp: number = (new Date().getTime());
        const elapsedTimeInSeconds: number = (currentTimeStamp - startTime) / 1000;
        setElapsedTime(elapsedTimeInSeconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isActive]);


    // updates the displayNet state with netpay from local storage
    // this is used to upadate the net pay counter on the page

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
  }

  const handleStartClick: () => void = () => {
    setIsActive(true);
    const newStartTime: number = new Date().getTime();
    setStartTime(newStartTime);
    localStorage.setItem('startTime', JSON.stringify(newStartTime));
    localStorage.setItem('activeTimer', JSON.stringify(true));
    localStorage.setItem('startButton', "Stop");
  }

  // this updates the gross pay counter

  const grosspayCalculation: number = elapsedTime * payPerSecond;
  useEffect(() => {
    if (isActive){
      setGrossPay(grosspayCalculation)}
  },[submittedRate, elapsedTime, isActive, payPerSecond]);
   // end pay calculation


// handles the form         

const handleRate = (event: React.ChangeEvent<HTMLInputElement>) => {      
    setInputRate(parseFloat(event.target.value));
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 event.preventDefault();
 setSubmittedRate(inputRate);
 setInputRate(0);
 localStorage.setItem('activeSubmittedRate', JSON.stringify(inputRate));
}

  
  return (
    
    <div className='p-8 bg-zinc-200'>
            <h1 className='text-3xl pb-10 text-center text-sky-600 border-b-2 border-orange-500 font-tilt'>PayTracker Basic</h1>
            <div className='flex flex-wrap flex-col md:flex-row flex-auto justify-center items-center p-6'>
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
                    <div className='border-slate-400 rounded-lg border-2 p-6 flex flex-auto flex-col flex-wrap justify-center items-end m-6'>
                        <h3 className='mr-6'>
                            Hourly Rate: ${ activeSubmittedRate }
                        </h3>
                        <form className='outline-blue-600 m-6 flex flex-auto flex-col justify-center items-end' onSubmit={ handleSubmit }>
                            <input 
                            className='text-slate-900 bg-slate-50 rounded-sm py-1.5 px-3 lg:mr-4 my-3 '
                            placeholder = {placeholderText}
                            min = "0"
                            type="number"
                            step="0.01" 
                            value={ inputRate } 
                            onChange={ handleRate } 
                            />
                      <button className=' my-3 bg-blue-400 rounded-md text-slate-900 font-semibold p-2 uppercase tracking-widest hover:outline px-6' type="submit">Submit</button>
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
