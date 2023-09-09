import { useTrackerContext } from "../utils/useTrackerContext";
interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
  handleStartClick: () => void;
  handleStopClick: () => void;
}

const Timer: React.FC<TimerProps> = ({ hours, minutes, seconds, handleStartClick, handleStopClick }) => {
  const { isActive } = useTrackerContext();
  return (
    <div className='m-6 flex flex-row items-center justify-between'>
      <p className='font-semibold text-2xl p-4 text-center'>
        {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </p>
      <div className='p-4'>
        {/* start/stop button conditionally rendered */}
        {isActive === true ? (
          <button className='bg-red-600 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleStopClick}>
            Stop
          </button>
        ) : (
          <button className='bg-green-500 m-4 py-1.5 px-6 font-semibold border-slate-700 rounded-md text-slate-50' onClick={handleStartClick}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default Timer;
