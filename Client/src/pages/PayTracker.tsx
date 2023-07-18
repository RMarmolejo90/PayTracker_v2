import { useContext } from 'react';
import { useTrackerContext } from '../utils/useTrackerContext';

export default function PayTracker() {
  // defines time
  
  const hours = Math.floor(elapsedTime / 3600);
  const minutes = Math.floor((elapsedTime % 3600) / 60);
  const seconds = elapsedTime % 60;
  
  const activeSubmittedRate = localStorage.getItem('activeSubmittedRate');


const { displayNet, grossPay, isActive, elapsedTime, startTimer, stopTimer } = useTrackerContext();
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
