'use client'
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarMain from '../../components/NavbarMain';
import { UseSelector, useSelector } from 'react-redux';
import { format } from 'date-fns';
export const DashboardPage = () => {
  const [error, setError] = useState(null);
  const user = useSelector(state => state.user);
  const[check,setCheck] = useState(false);
  useEffect( () => {
    const cookieValue = document.cookie.split('=')[1];
    const headers = {
      Authorization: `Bearer ${cookieValue}`
    }
     axios.get('https://flipr-yi8b.onrender.com/api/test2',
     {headers}
     )
      .then((response) => {
        console.log('SUCCESS');
        setCheck(true);})
      .catch((error) => {
        window.location.href = '/';    
  }
    ); 
  }, []);
const [data, setData] = useState(0);
useEffect(() => {
    const cookieValue = document.cookie.split('=')[1];
    const headers = {
      Authorization: `Bearer ${cookieValue}`
    }

    axios.get('https://flipr-yi8b.onrender.com/api/total_students')
      .then(response => {
        setData(response.data.totalStudents);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //Present Students ->
  const [presentStudents, setPresentStudents] = useState(0);
  useEffect(() => {
    const now = new Date();
 const formattedDate = format(now, 'yyyy-MM-dd');
    axios.post('https://flipr-yi8b.onrender.com/api/total_present',{ date: formattedDate})
      .then(response => {
        setPresentStudents(response.data.count);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  //Absent Students ->
  const [absentStudents, setAbsentStudents] = useState(0);
  useEffect(() => {
    const now = new Date();
 const formattedDate = format(now, 'yyyy-MM-dd');
    axios.post('https://flipr-yi8b.onrender.com/api/total_absent',{ date: formattedDate})
      .then(response => {
        setAbsentStudents(response.data.count);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log('presentStudents',typeof(presentStudents));
  return (
    check ? (
    <>
      <header>
        <NavbarMain />
      </header>

      <main className='p-5'>
        <h1 className='text-4xl text-[#012970] font-bold text-center md:text-left'>
          Admin Dashboard
        </h1>
        <p className=' font-extrabold text-[#012970] text-2xl text-center mb-2'>
          Today's Stats
        </p>
        <div className='flex flex-wrap justify-evenly gap-3'>
          <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit'>
            <div>Total Students</div>
            <div>
              <div className='font-normal'>{data}</div>
            </div>
          </div>
          <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit'>
            <div>Present | Today</div>
            <div>
              <div className='font-normal'>{presentStudents}</div>
            </div>
          </div>
          <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit'>
            <div>Absent | Today</div>
            <div>
              <div className='font-normal'>{absentStudents}</div>
            </div>
          </div>
          <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit'>
            <div>Attendance | Today</div>
            <div>
              <div className='font-normal'>
                {
                // ((Number(presentStudents)/Number(data))*100)
                isNaN(data) || data === 0 ? 'N/A' : ((presentStudents/data)*100).toFixed(1)
                }%
                </div>
            </div>
          </div>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Link href='/dashboard/studentlist'>
            <p className='bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden'>
              <span>Student Management</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </p>
          </Link>
          <Link href='/dashboard/attendance'>
            <p className='bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden'>
              <span>Attendance Management</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </p>
          </Link>
          <Link href='/dashboard/qrpage'>
            <p className='bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden'>
              <span>Generate QR Code</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='h-6 w-6 text-gray-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </p>
          </Link>
        </div>
      </main>
      <footer></footer>
    </>): <></>
  );
};

export default DashboardPage;
