import { useTrackerContext } from '../../utils/useTrackerContext';
import { useState, useEffect } from 'react';
import Select from 'react-select';


const ProNet: React.FC = () => {
  const storedDeductions: string | null = localStorage.getItem('deductionState');
  const defaultDeductionRate = 0.8;
  const { setDisplayNet, grossPay } = useTrackerContext();
  
  const [deductionRate, setDeductionRate] = useState<number>(() => {
  try {
    return storedDeductions ? JSON.parse(storedDeductions) : defaultDeductionRate;
  } catch (error) {
    console.error('Error parsing deduction rate:', error);
    return defaultDeductionRate;
  }
  });

  // updates the displayNet state with netpay from local storage
  // this is used to update the displayed net pay on the page
  useEffect(() => {
    const storedNetPay: string | null = localStorage.getItem('netPay');
    if (storedNetPay !== null && !isNaN(parseFloat(storedNetPay))) {
      const parsedNetPay = parseFloat(storedNetPay);
      setDisplayNet(parsedNetPay);
    }
  }, []);

  //this updates deduction rate in local storage;
  useEffect(() => {
    localStorage.setItem('deductionState', JSON.stringify(deductionRate));
  }, [deductionRate]);

  const [netPay, setNetPay] = useState<number>(0);

  // this updates netPay from grosspay and deductionRate
  useEffect(() => {
    const newNetPay: number = (grossPay * deductionRate);
    setNetPay(newNetPay);
}, [grossPay, deductionRate]);

  useEffect(() => {
    localStorage.setItem('netPay', JSON.stringify(netPay));
  }, [netPay]);


  const [deductionsLabel, setDeductionsLabel] = useState<string>(() => {
    const storedLabel: string | null = localStorage.getItem('placeholderText');
    return storedLabel ? JSON.parse(storedLabel) : 'Default 20%';
  });

  useEffect(() => {
    const jsonLabel: string = JSON.stringify(deductionsLabel);
    localStorage.setItem('placeholderText', jsonLabel);
  }, [deductionsLabel]);

  function handleDeductionRate(data: any) {
    setDeductionRate(data.value);
    setDefDeductions(data.value);
    setDeductionsLabel(data.label);
  }

  type OptionsType = {
    id: number,
    value: number,
    label: string,
  }

  const deductionOptions: OptionsType[] = [
    { id: 1, value: 0.88, label: '12%' },
    { id: 2, value: 0.86, label: '14%' },
    { id: 3, value: 0.90, label: '10%' },
    { id: 4, value: 0.84, label: '16%' },
    { id: 5, value: 0.82, label: '18%' },
    { id: 6, value: 0.80, label: '20%' },
    { id: 7, value: 0.78, label: '22%' },
    { id: 8, value: 0.76, label: '24%' },
    { id: 9, value: 0.74, label: '26%' },
    { id: 10, value: 0.72, label: '28%' },
    { id: 11, value: 0.70, label: '30%' },
    { id: 12, value: 0.68, label: '32%' },
    { id: 13, value: 0.66, label: '34%' },
    { id: 14, value: 0.64, label: '36%' },
    { id: 15, value: 0.62, label: '38%' },
  ];

  const defaultOption = deductionOptions[5].value;
  const storedDefault: string | null = localStorage.getItem('deductions') ?? defaultOption.toString();
  const deductionDefault = parseFloat(storedDefault);

  useEffect(() => {
    localStorage.setItem('deductions', JSON.stringify(defDeductions));
  }, [deductionRate]);

  const [defDeductions, setDefDeductions] = useState<number>(() => {
    try {
      return deductionDefault !== null ? +deductionDefault : defaultOption;
    } catch (error) {
      console.error('error parsing the deductionDefault', error);
      return defaultOption;
    }
  });

  return (
    <div className='p-6 flex flex-col justify-center items-center'>
      <label htmlFor='deductions'>Deductions Rate</label>
      <div className='p-6 text-slate-800'>
      <Select
        defaultValue={deductionDefault}
        placeholder={deductionsLabel}
        options={deductionOptions as any}
        onChange={handleDeductionRate}
      />
      </div>
    </div>
  );
};

export default ProNet;
