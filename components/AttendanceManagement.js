'use client'
import { useState, React } from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AttendanceManagement = () => {
  const dummyRecords = [
   { id: 1, name: 'John Doe', date: '2024-01-23', status: 'Present' },
   { id: 2, name: 'Jane Smith', date: '2024-01-23', status: 'Absent' },
   // Add more dummy records as needed
  ];
   const [selectedDay, setSelectedDay] = useState(null);
   const [records, setRecords] = useState(dummyRecords);
  
   // This function will be called when a day is selected
   const handleDayClick = (day) => {
      setSelectedDay(day);
   };
   const formattedSelectedDay = selectedDay ? format(selectedDay, 'yyyy-MM-dd') : null;
   const filteredRecords = selectedDay ? records.filter(record => record.date === formattedSelectedDay) : [];
  return (
    <>

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Attendance Management</h1>
      <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredRecords.map((record) => (
            <tr key={record.id}>
              <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">{record.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default AttendanceManagement;