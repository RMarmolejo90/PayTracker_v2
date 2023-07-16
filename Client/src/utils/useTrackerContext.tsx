import { useContext } from 'react';
import { TrackerContext } from './TrackerContext';

export const useTrackerContext = () => {
  const context = useContext(TrackerContext);
  if (!context) {
    throw new Error('useTrackerContext must be used within a TrackerContextProvider');
  }
  return context;
};
