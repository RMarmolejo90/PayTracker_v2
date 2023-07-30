/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { useTrackerContext } from '../utils/useTrackerContext';
import * as React from 'react';
import Timer from '../components/Timer';
import ProNet from '../components/ProComponents/ProNet';
import axios from 'axios';

const PayTrackerPro: React.FC = () => {
  const { displayNet, grossPay, isActive, elapsedTime, setDisplayNet, setGrossPay, setIsActive, setElapsedTime} = useTrackerContext();
  const [inputRate, setInputRate] = useState('');
  const [submittedRate, setSubmittedRate] = useState (
    isActive && localStorage.getItem('activeSubmittedRate') !== null ? localStorage.getItem('activeSubmittedRate')! : '0'
  );
  const [startTime, setStartTime] = useState<number>();
  type Shift = {
    timeIn: Number, // String is shorthand for {type: String} 
    endTime: Number,
    grossPay: Number,
    netPay: Number,
    hoursWorked: Number,
    date: Number,
    email: String
  }
  const [history, setHistory] = useState<Shift[]>([]);
  
  // defines time
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  const storedNetPay = localStorage.getItem('netPay');
  const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');
  const payPerSecond: number = (parseFloat(submittedRate) / 3600);
  const netPayNumberType = parseFloat(storedNetPay!);

  const user = async (_req: any, res: any) => {await axios.get('/email');
    console.log(user);
}

  // Collect user history from db on mount

  useEffect (() => {
    async() => {
      try {
        const response = await axios.get('localhost:3000/shift', localStorage.getItem('UserId'));
        const shiftLog = response.data;
        setHistory(shiftLog);
      } catch (error) {
        console.error(error);
      }
    }
  },[]);

   
    // updates the displayNet state with netpay from local storage
    // this is used to upadate the displayed net pay on the page

    useEffect (() => {
      if (netPayNumberType != null)
      setDisplayNet(netPayNumberType);
  }, [netPayNumberType, setDisplayNet]);
  
   // handles timer button
    // Start or stop the timer

    // this is the db schema for reference
    // timeIn: Number,
    // endTime: Number,
    // grossPay: Number,
    // netPay: Number,
    // hoursWorked: Number,
    // date: Number

    const shiftData = {
      endTime:Date.now(),
      grossPay: grossPay,
      netPay: displayNet,
      hoursWorked: elapsedTime,
      date: Date.now().toLocaleString,
      email: user
    }

    const handleStopClick = async () => {
      setIsActive(false);
      try{
        const response = await axios.put('http://localhost:3000/clock-in', shiftData );
        const responseStatus = response.status;
        if(responseStatus === 200){
          alert(`Good Work Today! You worked ${shiftData.hoursWorked} today, and made ${grossPay}`);
        }

        } catch(error) {
          console.error(error);
        }
        setElapsedTime(0);
        localStorage.removeItem('startTime');
        localStorage.setItem('activeTimer', false.toString());
        localStorage.removeItem('startButton');
        console.log("timer is not active");
      }

  const handleStartClick = () => {
      setIsActive(true);
          setStartTime(new Date().getTime());
          localStorage.setItem('startTime', new Date().getTime().toString());
          localStorage.setItem('activeTimer', true.toString());
          localStorage.setItem('startButton', "Stop");
          console.log("timer-active");
          console.log("startTime : ", startTime);
  }
 // this calculates the hourly pay into seconds
  

 useEffect(() => {
  let interval: NodeJS.Timeout | null = null;
  if (isActive) {
    interval = setInterval(() => {
      setGrossPay(+localStorage.getItem('timeElapsed')! * payPerSecond);
    }, 1000);
  }
  return () => {
    if (interval) {
      clearInterval(interval);
    }
  };
}, [submittedRate, isActive]);

// end pay calculation

const placeholderText = "Pay Rate : " + submittedRate;

// handles the form         

const handleRate = (event: React.ChangeEvent<HTMLInputElement>) => {      
    setInputRate(event.target.value)
}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
                        <ProNet />
                    </div>
            </div>
            <div>
              <h3>Work History</h3>
              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Time In</th>
                      <th>End Time</th>
                      <th>Gross Pay</th>
                      <th>Net Pay</th>
                      <th>Hours Worked</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((shift) => (
                      <tr key={shift._id}>
                        <td>{new Date(shift.timeIn).toLocaleString()}</td>
                        <td>{shift.endTime ? new Date(shift.endTime).toLocaleString() : '-'}</td>
                        <td>${shift.grossPay.toFixed(2)}</td>
                        <td>${shift.netPay.toFixed(2)}</td>
                        <td>{shift.hoursWorked}</td>
                        <td>{new Date(shift.date).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
  )
}

export default PayTrackerPro;
