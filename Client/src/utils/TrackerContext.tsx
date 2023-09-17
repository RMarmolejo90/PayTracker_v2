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

    // updates the displayNet state with netpay from local storage
    // this is used to upadate the displayed net pay on the page
  useEffect(() => {
    const storedNetPay: string | null = localStorage.getItem('netPay');
    if (storedNetPay !== null && !isNaN(parseFloat(storedNetPay))) {
      const parsedNetPay = parseFloat(storedNetPay);
      setDisplayNet(parsedNetPay);
    }
  }, []);

    // timer function  
    // this counts elapsed time
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

  useEffect(() => {
    const storedTime: string | null = localStorage.getItem('startTime') ?? '0';
    const interval = setInterval(() => {
      if (isActive) {
        const elapsedTimeInSeconds: number = Math.floor(new Date().getTime() - +storedTime / 1000);
        setElapsedTime(elapsedTimeInSeconds);
        localStorage.setItem('timeElapsed', JSON.stringify(elapsedTimeInSeconds));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [submittedRate, setSubmittedRate] = useState (
    isActive && localStorage.getItem('activeSubmittedRate') !== null ? +localStorage.getItem('activeSubmittedRate')! : 0);
  const payPerSecond = Number(submittedRate / 3600);

  // this calculates the hourly pay into seconds
  const storedTime: string = localStorage.getItem('timeElapsed') ?? '1';
  const parsedTimeElapsed: number = parseFloat(storedTime);
  console.log(`parsed time = ${parsedTimeElapsed}`);
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setGrossPay(parsedTimeElapsed * payPerSecond);
      }, 1000);
  }
  return () => {
    if (interval) {
      clearInterval(interval);
    }
  };
  }, [submittedRate, isActive, payPerSecond]);

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
