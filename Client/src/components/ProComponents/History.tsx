import axios from "axios"

type Shift = {
    timeIn: number, 
    endTime: number,
    grossPay: number,
    netPay: number,
    hoursWorked: string,
    date: string,
    _id: string,
    userId: string
}

type HistoryProps = {
    history: Shift[]
}

export default function History(props:HistoryProps) {

    // delete shift
    const deleteShift = (_id: string) => {
        async () => {
            try {
            await axios.delete(`http://localhost:3000/shift/${_id}`);
            console.log(`Shift with _id ${_id} deleted successfully.`);
            } catch (error) {
            console.error(`Error deleting shift with _id ${_id}:`, error);
            }
        }
      };
      
    
    // raw data from the database
    const rawHistory: Shift[] = props.history;
    
    // filters out the currently active shift
    const history: Shift[] = rawHistory.filter((shift) => shift.endTime !== undefined && shift.endTime !== null);

  return (
    <div>
        <h3>Work History</h3>
        <div>
          <table className="table">
            <thead>
              <tr className="">
                <th className="p-2">Time In</th>
                <th className="p-2">End Time</th>
                <th className="p-2">Gross Pay</th>
                <th className="p-2">Net Pay</th>
                <th className="p-2">Hours Worked</th>
                <th className="p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((shift) => (
                <tr key={shift._id}>
                  <td className="p-2 border-r border-slate-800 ">{new Date(shift.timeIn).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}</td>
                  <td className="p-2 border-r border-slate-800 ">{shift.endTime ? new Date(shift.endTime).toLocaleString([], { hour: '2-digit', minute: '2-digit' }) : '-'}</td>
                  <td className="p-2 border-r border-slate-800 ">${shift.grossPay.toFixed(2)}</td>
                  <td className="p-2 border-r border-slate-800 ">${shift.netPay.toFixed(2)}</td>
                  <td className="p-2 border-r border-slate-800 ">{shift.hoursWorked}</td>
                  <td className="p-2 ">{new Date(shift.date).toLocaleDateString([], {year:'numeric', month: '2-digit', day: '2-digit'})}</td>
                  <button onClick={() => deleteShift(shift._id)} className="p-2 bg-slate-400 tracking-wider uppercase text-xs">Delete</button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

