import { useTrackerContext } from '../utils/TrackerContext';

const ChildComponent = () => {
  const { isActive, elapsedTime, displayNet, grossPay } = useTrackerContext();
}

export default function PayTrackerPro() {
  return (
    <div>PayTrackerPro</div>
  )
}