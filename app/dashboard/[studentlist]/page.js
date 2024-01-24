'use client'
import axios from 'axios';
import StudentList from "../../../components/StudentList";
import StudentForm from "../../../components/StudentForm";
import Pagination from "../../../components/Pagination";
import students from "../../data";
import { useRouter } from "next/navigation";
import Router from "next/router";
import React, { useState, useEffect } from 'react';
import { MdOutlineSearch } from "react-icons/md";
import Navbar from '../../../components/Navbar';
import NavbarMain from '../../../components/NavbarMain';
const studentlist = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;
  const router = useRouter();
  // useEffect(() => {
  //   const initialPage = router.query?.page ? Number(router.query?.page) : 1;
  //   setCurrentPage(initialPage);
  // }, [router.query?.page])
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  useEffect(() => {
    const initialPage = Number(router.query?.page) || 1; // Handle undefined directly
    setCurrentPage(initialPage);
  }, [router.query?.page]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/studentlist`); // Update URL for client-side navigation
  };

  // useEffect(() => {
  //   console.log(router.query?.page);
  // }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [isFormShown, setIsFormShown] = useState(false);
  return (
    isFormShown ? (
    <>
    <StudentForm setIsFormShown={setIsFormShown}/> 
    </>
    ) :
  <>
      <header>
        <NavbarMain/>
      </header>
        <main>
      <div className=" w-11/12 m-auto p-4">
        <div className=" flex flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 text-[#012970] ">Student Management</h1>
          <div className="relative mt-2 w-fit rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500"><MdOutlineSearch /></span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Search by Name"
            />
          </div>
          <button
            className="mt-4 mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsFormShown(true)}
          >
            Add New Student
          </button>
        </div>
        {/* <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name"
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}
        <StudentList
          students={filteredStudents}
          studentsPerPage={studentsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      </main>
      <footer></footer>
  </>
  )
}

export default studentlist