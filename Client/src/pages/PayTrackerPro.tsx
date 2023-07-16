import { useTrackerContext } from '../utils/TrackerContext';

const Context = () => {
  const { isActive, elapsedTime, displayNet, grossPay } = useTrackerContext();
}

export default function PayTrackerPro() {
  return (
    <div>PayTrackerPro</div>
  )
}