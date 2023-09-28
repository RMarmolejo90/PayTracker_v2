import { createContext, useState } from 'react';

export interface TrackerContextType {
    submittedRate: number;
    isActive: boolean;
    elapsedTime: number;
    displayNet: number;
    grossPay: number;
    shiftDuration: string;
    startTimer: () => void;
    stopTimer: () => void;
    setShiftDuration: React.Dispatch<React.SetStateAction<string>>;
    setSubmittedRate: React.Dispatch<React.SetStateAction<number>>;
    setDisplayNet: React.Dispatch<React.SetStateAction<number>>; 
    setGrossPay: React.Dispatch<React.SetStateAction<number>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setElapsedTime: React.Dispatch<React.SetStateAction<number>>;
  }

export const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

interface TrackerContextProviderProps {
    children: React.ReactNode;
  }


const TrackerContextProvider: React.FC<TrackerContextProviderProps> = ({ children }) => {
    
  const [isActive, setIsActive] = useState<boolean>(false); 
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [displayNet, setDisplayNet] = useState<number>(0);
  const [grossPay, setGrossPay] = useState<number>(0);
  const [shiftDuration, setShiftDuration] = useState<string>('');

  const startTimer = () => {
    setIsActive(true);
    const startTime = new Date().getTime();
    localStorage.setItem('startTime', JSON.stringify(startTime));
    localStorage.setItem('activeTimer', JSON.stringify(true));
  };
  
  const stopTimer = () => {
    setIsActive(false);
    setElapsedTime(0);
    localStorage.removeItem('startTime');
    localStorage.removeItem('activeTimer');
  };


  const [submittedRate, setSubmittedRate] = useState (
    isActive && (localStorage.getItem('activeSubmittedRate') !== null) ? +localStorage.getItem('activeSubmittedRate')! : 0);

  // this calculates the hourly pay into seconds
  //const timeElapsed: string = localStorage.getItem('timeElapsed') ?? '0';
  //const parsedTimeElapsed: number = parseFloat(timeElapsed);
  //for testing


  const contextValue: TrackerContextType = {
      submittedRate,
      isActive,
      elapsedTime,
      displayNet,
      grossPay,
      shiftDuration,
      setShiftDuration,
      setSubmittedRate,
      startTimer,
      stopTimer,
      setDisplayNet,
      setGrossPay,
      setElapsedTime,
      setIsActive,
  };

  return <TrackerContext.Provider value={contextValue}>{children}</TrackerContext.Provider>;
};

export default TrackerContextProvider;
