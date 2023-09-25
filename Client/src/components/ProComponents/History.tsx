
export default function History(props) {
    const history = props.history;
    
  return (
    <div>
        <h3>Work History</h3>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Time In</th>
                <th>End Time</th>
                <th>Gross Pay</th>
                <th>Net Pay</th>
                <th>Hours Worked</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {history.map((shift) => (
                <tr key={shift._id}>
                  <td>{new Date(shift.timeIn).toLocaleString()}</td>
                  <td>{shift.endTime ? new Date(shift.endTime).toLocaleString() : '-'}</td>
                  <td>${shift.grossPay.toFixed(2)}</td>
                  <td>${shift.netPay.toFixed(2)}</td>
                  <td>{shift.hoursWorked}</td>
                  <td>{new Date(shift.date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  )
}

