import { createContext, useState, useEffect } from 'react';

export interface TrackerContextType {
    submittedRate: number;
    isActive: boolean;
    elapsedTime: number;
    displayNet: number;
    grossPay: number;
    startTimer: () => void;
    stopTimer: () => void;
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
    
  const activeTimer: boolean = Boolean(localStorage.getItem('activeTimer')) ?? false;
  const [isActive, setIsActive] = useState<boolean>(activeTimer); 
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [displayNet, setDisplayNet] = useState<number>(0);
  const [grossPay, setGrossPay] = useState<number>(0);


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
