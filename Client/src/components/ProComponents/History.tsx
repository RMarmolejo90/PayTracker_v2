import axios from "axios";
import {useState} from "react";

type Shift = {
    timeIn: number,
    endTime: number, // endTime as number
    grossPay: number,
    netPay: number,
    hoursWorked: string,
    date: string,
    _id: string,
    userId: string
}

type HistoryProps = {
    historyProps: Shift[] | [],
    fetchHistory: () => Promise<void>
}

const History = (props: HistoryProps) => {
    const { fetchHistory, historyProps } = props;

    const [history, setHistory] = useState(historyProps);



    const deleteShift = async (_id: string) => {
        try {
            await axios.delete(`https://paytrack-backend.onrender.com/shift/${_id}`);
            const newHistory = Object.values(fetchHistory());
            setHistory(newHistory);
        } catch (error) {
            console.error(`Error deleting shift with _id ${_id}:`, error);
        }
    };
    
    return (
        <div className="min-w-full p-6 bg-zinc-100 border-orange-500 rounded-xl border-t-2 flex flex-col items-center justify-between">
            <h2 className="font-semibold text-sky-600 text-3xl text-center mb-10">Work History</h2>
            <div>
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-xs lg:text-xl text-center mb-4 border-b-orange-500">
                            <th className="lg:p-2 p-1.5">Start</th>
                            <th className="lg:p-2 p-1.5">End</th>
                            <th className="lg:p-2 p-1.5">Gross</th>
                            <th className="lg:p-2 p-1.5">Net</th>
                            <th className="lg:p-2 p-1.5">Hours</th>
                            <th className="lg:p-2 p-1.5">Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs lg:text-lg ">
                        {history.map((shift) => (
                            <>
                                <tr key={shift._id} className="text-center ">
                                    <td className="lg:p-2 p-1.5 mt-4">{shift.timeIn ? new Date(shift.timeIn).toLocaleString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}</td>
                                    <td className="lg:p-2 p-1.5 mt-4">{shift.endTime ? new Date(shift.endTime).toLocaleString([], { hour: '2-digit', minute: '2-digit' }) : 'N/A'}</td>
                                    <td className="lg:p-2 p-1.5 mt-4">${shift.grossPay ? shift.grossPay.toFixed(2) : '0.00'}</td>
                                    <td className="lg:p-2 p-1.5 mt-4">${shift.netPay ? shift.netPay.toFixed(2) : '0.00'}</td>
                                    <td className="lg:p-2 p-1.5 mt-4">{shift.hoursWorked || 'N/A'}</td>
                                    <td className="lg:p-2 p-1.5 mt-4">{shift.date ? new Date(shift.date).toLocaleDateString([], {year: '2-digit', month: '2-digit', day: '2-digit'}) : 'N/A'}</td>
                                </tr>

                                <tr className="border-b border-orange-500">
                                    <td colSpan={6} className="text-center ">
                                        <button type="button" onClick={() => deleteShift(shift._id)} className="mt-2 mb-4 bg-slate-800 tracking-wider uppercase text-xs p-2 font-semibold text-slate-100 hover:cursor-pointer hover:bg-red-700 rounded-xl">Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default History;
