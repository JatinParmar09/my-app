import React from 'react'
import { useState } from 'react';
const StudentForm = (props) => {
    const [newStudent, setNewStudent] = useState({ name: '', rollno: '' });
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('https://your-api-endpoint/students', newStudent);
          console.log(response.data);
          // Reset the form
          setNewStudent({ name: '', rollno: '' });
          props.setIsFormShown(false);
        } catch (error) {
          console.error(error);
        }
      };
    
  return (
    <>
    <form onSubmit={handleFormSubmit} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Add New Student</h2>
          <button type="button" onClick={() => props.setIsFormShown(false)}>Close</button>
          <input
            type="text"
            name="name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            placeholder="Name"
            required
          />
          <input
            type="number" 
            className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            name="rollno"
            value={newStudent.rollno}
            onChange={(e) => setNewStudent({ ...newStudent, rollno: e.target.value })}
            placeholder="Roll No."
            required
          />
          {/* // Name StudentId emailid phoneno password. */}
          <button type="submit" className='mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Add Student</button>
        </div>
      </form>
    </>
  )
}

export default StudentForm