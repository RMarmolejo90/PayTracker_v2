
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
                  <td className="p-2 border-r border-slate-800 ">{new Date(shift.timeIn).toLocaleString()}</td>
                  <td className="p-2 border-r border-slate-800 ">{shift.endTime ? new Date(shift.endTime).toLocaleString() : '-'}</td>
                  <td className="p-2 border-r border-slate-800 ">${shift.grossPay}</td>
                  <td className="p-2 border-r border-slate-800 ">${shift.netPay}</td>
                  <td className="p-2 border-r border-slate-800 ">{shift.hoursWorked}</td>
                  <td className="p-2 ">{shift.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

