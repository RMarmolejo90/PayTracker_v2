import { useTrackerContext } from '../utils/useTrackerContext';

const Context = () => {
  const { isActive, elapsedTime, displayNet, grossPay } = useTrackerContext();
}

export default function PayTracker() {
  return (
    <div>PayTracker</div>
  )
}
