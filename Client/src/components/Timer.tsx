import { useTrackerContext } from "../utils/useTrackerContext";

interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  handleStartClick: () => void;
  handleStopClick: (updatedShiftDuration:string) => void;
}

const Timer: React.FC<TimerProps> = ({ hours, minutes, seconds, handleStartClick, handleStopClick }) => {
  const { isActive, setShiftDuration, } = useTrackerContext();
  const shiftHours = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`


  // run stopClickHandler after the async stopClick to ensure state is correctly updated
  const stopClickHandler = (updatedShiftDuration:string) => {
    handleStopClick(updatedShiftDuration);
  }
  
  const stopClick = async () => {
    await setShiftDuration(shiftHours);
    stopClickHandler(shiftHours);
    console.log(`shiftHours: ${shiftHours}`);
  }

  return (
    <div className='m-6 flex flex-row items-center justify-between'>
      <p className='font-semibold text-2xl p-4 text-center'>
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
      <div className='p-4'>
        {/* start/stop button conditionally rendered */}
        {isActive === true ? (
          <button type="button" className='bg-orange-400 uppercase tracking-widest m-4 py-2 px-6 font-semibold border-slate-700 rounded-md text-slate-950 hover:outline' onClick={stopClick}>
            Stop
          </button>
        ) : (
          <button type="button" className='bg-green-400 uppercase tracking-widest m-4 py-2 px-6 font-semibold border-slate-700 rounded-md text-slate-950 hover:outline' onClick={handleStartClick}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
