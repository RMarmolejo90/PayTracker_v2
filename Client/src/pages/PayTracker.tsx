import { useTrackerContext } from '../utils/TrackerContext';

const ChildComponent = () => {
  const { isActive, elapsedTime, displayNet, grossPay } = useTrackerContext();
}

export default function PayTracker() {
  return (
    <div>PayTracker</div>
  )
}
