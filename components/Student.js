function Student({ student }) {
  return (
    // <li className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-gray-100">
    //   <div className="flex items-center space-x-4">
    //     {/* <img  src=student's profile image URL (optional) alt={student.name} className="w-12 h-12 rounded-full" /> */}
    //     <div className="flex flex-col">
    //       <h3 className="text-lg font-semibold">{student.name}</h3>
    //       <p className="text-sm text-gray-500">{student.rollno}</p>
    //     </div>
    //   </div>
    //   <div className="flex items-center space-x-2">
    //     <p className="text-sm font-medium">{student.m1}</p>
    //     <p className="text-sm font-medium">{student.m2}</p>
    //   </div>
    // </li>
    <table className=" table-auto w-screen">
      <thead>     
          <th className="p-4 text-left font-semibold">Name</th> 
      </thead>
      <tbody>
      {student.map((student) => (
        <tr key={student.rollno} className="hover:bg-gray-100">
          <td className="p-4">{student.name}</td>
          <td className="p-4">{student.rollno}</td>
          <td className="p-4">{student.m1}</td>
          <td className="p-4">{student.m2}</td>
        </tr>
      ))}
      </tbody>
    </table>

  );
}

export default Student;
