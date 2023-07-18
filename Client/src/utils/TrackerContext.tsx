import { createContext, useState, useEffect, ReactNode } from 'react';

export interface TrackerContextType {
  isActive: boolean;
  elapsedTime: number;
  displayNet: number;
  grossPay: number;
  startTimer: () => void;
  stopTimer: () => void;
}

export const TrackerContext = createContext<TrackerContextType | undefined>(undefined);

interface TrackerContextProviderProps {
    children: React.ReactNode;
  }
const TrackerContextProvider: React.FC<TrackerContextProviderProps> = ({ children }) => {
  const [isActive, setIsActive] = useState<boolean>(() => {
    const activeTimer = localStorage.getItem('activeTimer');
    return activeTimer ? JSON.parse(activeTimer) : false;
  });

  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const [displayNet, setDisplayNet] = useState<number>(0);
  const [grossPay, setGrossPay] = useState<number>(0);

    // updates the displayNet state with netpay from local storage
    // this is used to upadate the displayed net pay on the page
  useEffect(() => {
    const storedNetPay = localStorage.getItem('netPay');
    if (storedNetPay !== null) {
      const parsedNetPay = JSON.parse(storedNetPay);
      setDisplayNet(parsedNetPay);
    }
  }, []);

    // timer function  
    // this counts elapsed time
  const startTimer = () => {
    setIsActive(true);
    const startTime = new Date().getTime();
    localStorage.setItem('startTime', startTime.toString());
    localStorage.setItem('activeTimer', 'true');
  };

  const stopTimer = () => {
    setIsActive(false);
    setElapsedTime(0);
    localStorage.removeItem('startTime');
    localStorage.removeItem('activeTimer');
  };

  useEffect(() => {
    const storedTime = localStorage.getItem('startTime');
    const interval = setInterval(() => {
      if (storedTime) {
        const elapsedTimeInSeconds = Math.floor((new Date().getTime() - Number(storedTime)) / 1000);
        setElapsedTime(elapsedTimeInSeconds);
        localStorage.setItem('timeElapsed', elapsedTimeInSeconds.toString());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const submittedRate = isActive ? localStorage.getItem('activeSubmittedRate') : '0';
    const payPerSecond = Number(submittedRate) / 3600;

    let interval: NodeJS.Timeout | null = null;
    if (isActive) {
      interval = setInterval(() => {
        setGrossPay(Number(localStorage.getItem('timeElapsed')) * payPerSecond);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive]);

  const contextValue: TrackerContextType = {
    isActive,
    elapsedTime,
    displayNet,
    grossPay,
    startTimer,
    stopTimer,
  };

  return <TrackerContext.Provider value={contextValue}>{children}</TrackerContext.Provider>;
};

export default TrackerContextProvider;
