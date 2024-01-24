import Student from "./Student";
import Pagination from "./Pagination";
function StudentList({ students, studentsPerPage, currentPage, onPageChange }) {
  const startIndex = (currentPage - 1) * studentsPerPage;
  const endIndex = Math.min(startIndex + studentsPerPage, students.length);
  const currentStudents = students.slice(startIndex, endIndex);

  return (
    <>
      {/* <div className="p-4"> */}
      {/* <h1 className="text-2xl w-fit font-bold mb-4">Student List</h1> */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> */}
      {/* {currentStudents.map((student) => (
          ))} */}
      {/* <Student key={students.rollno} student={students} /> */}
      <table className=" w-full p-2 mr-5">
        <thead>
          <tr className=" border-b-2 border-blue-500">
            <th className="p-4 text-left font-semibold">Roll No</th>
            <th className="p-4 text-left font-semibold">Name</th>
            <th className="p-4 text-left font-semibold">M1</th>
            <th className="p-4 text-left font-semibold">M2</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.rollno} className=" bg-white border-b-[1px] border-blue-700 hover:bg-slate-100">
              <td className="p-4">{student.rollno}</td>
              <td className="p-4">{student.name}</td>
              <td className="p-4">{student.m1}</td>
              <td className="p-4">{student.m2}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* </div> */}
      <Pagination
        totalStudents={students.length}
        studentsPerPage={studentsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      {/* </div> */}
    </>
  );
}

export default StudentList;