import { useTrackerContext } from '../../utils/useTrackerContext'
import { useState, useEffect } from 'react';
import Select from 'react-select';


const BasicNet: React.FC = () => {
    const storedDeductions = localStorage.getItem('deductionState');
    const defaultDeductionRate = 0.8;
    const {grossPay, setDisplayNet} = useTrackerContext();

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

  useEffect(() => {
    localStorage.setItem('deductionState', JSON.stringify(deductionRate));
  }, [deductionRate]);

  const [netPay, setNetPay] = useState<number>(0);

  //Updates netPay in local storage
  useEffect(() => {
    setNetPay(+grossPay * deductionRate);
    localStorage.setItem('netPay', netPay.toString());
  }, [grossPay, deductionRate, netPay]);

  const [deductionsLabel, setDeductionsLabel] = useState<string>(() => {
    const storedLabel = localStorage.getItem('placeholderText');
    return storedLabel ? JSON.parse(storedLabel) : 'Default 20%';
  });

  useEffect(() => {
    const jsonLabel = JSON.stringify(deductionsLabel);
    localStorage.setItem('placeholderText', jsonLabel);
  }, [deductionsLabel]);

  function handleDeductionRate(data: any) {
    setDeductionRate(data.value);
    setDefDeductions(data.value);
    setDeductionsLabel(data.label);
  }

  const deductionOptions = [
    { id: 1, value: 0.90, label: '10%' },
    { id: 2, value: 0.88, label: '12%' },
    { id: 3, value: 0.86, label: '14%' },
    { id: 4, value: 0.84, label: '16%' },
    { id: 5, value: 0.82, label: '18%' },
    { id: 6, value: 0.80, label: '20%' },
    { id: 7, value: 0.78, label: '22%' },
    { id: 8, value: 0.76, label: '24%' },
    { id: 9, value: 0.74, label: '26%' },
    { id: 10, value: 0.72, label: '28%' },
    { id: 11, value: 0.70, label: '30%' },
  ];

  const deductionDefault = localStorage.getItem('deductions');
  const defaultOption = deductionOptions[5].value;

  useEffect(() => {
    localStorage.setItem('deductions', JSON.stringify(defDeductions));
  }, [deductionRate]);

  const [defDeductions, setDefDeductions] = useState<number>(() => {
    try {
      return deductionDefault ? JSON.parse(deductionDefault) : defaultOption;
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

export default BasicNet;
