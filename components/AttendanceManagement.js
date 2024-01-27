'use client'
import { useState, React, useEffect } from 'react';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import axios from 'axios';
const AttendanceManagement = () => {

const [selectedDay, setSelectedDay] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [studentsList, setStudentsList] = useState([]);
  useEffect(() => {
    const now = new Date();
 const formattedDate = format(now, 'yyyy-MM-dd');
    axios.post('https://flipr-yi8b.onrender.com/api/day_attendance',{ date: format(selectedDay, 'yyyy-MM-dd')})
      .then(response => {
        setStudentsList(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [selectedDay]);

  const dummyRecords = [
   { id: 1, name: 'John Doe', date: '2024-01-23', status: 'Present' },
   { id: 2, name: 'Jane Smith', date: '2024-01-23', status: 'Absent' },
   // Add more dummy records as needed
  ];
   const [records, setRecords] = useState(dummyRecords);
  
   // This function will be called when a day is selected
   const handleDayClick = (day) => {
      setSelectedDay(day);
   };
   const formattedSelectedDay = selectedDay ? format(selectedDay, 'yyyy-MM-dd') : null;
  //  const filteredRecords = selectedDay ? studentsList.filter(record => record.date === formattedSelectedDay) : [];
  return (
    <>

    <div className="p-4">
      <div className='flex flex-col justify-center items-center'>
        <h1 className="text-2xl font-bold mb-4 text-center w-screen">Attendance Management</h1>
      <DayPicker selected={selectedDay} onDayClick={handleDayClick} />
        </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">StudentID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {studentsList.map((record) => (
            <tr key={record.student_id}>
              <td className="px-6 py-4 whitespace-nowrap">{record.student_id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{format(record.date, 'yyyy-MM-dd')}</td>
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