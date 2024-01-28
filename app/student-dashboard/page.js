/* eslint-disable react/no-unescaped-entities */
'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarMain from '../../components/NavbarMain';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import { CiCamera } from "react-icons/ci";
const StudentDashboardPage = () => {
    const [sPresent, setSPresent] = useState(0);
    const [check, setCheck] = useState(false);
    const [error, setError] = useState(null);
    const [sAbsent, setSAbsent] = useState(0);
    // const userid = parseInt(localStorage.getItem('UserID'));
    const [userid, setUserid] = useState(0);
    const isLargerThan600 = useMediaQuery({ query: '(min-width: 600px)' });
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedUserId = localStorage.getItem('UserID');
            if (storedUserId) {
                setUserid(parseInt(storedUserId));
            } else {
                router.push('/login');
            }
        }
    }, []);
    useEffect(() => {
        const cookieValue = document.cookie.split('=')[1];
        const headers = {
            Authorization: `Bearer ${cookieValue}`
        }
        console.log(headers);
        // axios.get('https://flipr-yi8b.onrender.com/auth/test2',headers)
        //     .then((response) => {
        //         console.log('SUCCESS');
        //         setCheck(true);
        //     })
        //     .catch((error) => {
        //         // window.location.href = '/';
        //         console.error(error.message);
        //     }
        //     );
        axios({
            method: 'get',
            url: 'https://flipr-yi8b.onrender.com/auth/test2',
            headers: headers,
            validateStatus: (status) => {
               return true; // Always returning true, adjust according to your needs
            },
           }).catch(error => {
            console.error(error.message);
           }).then(response => {
                console.log('SUCCESS');
                setCheck(true);
           });
    }, []);
    // const user = useSelector(state => state.user);
    // const headers = {
    //     Authorization: `Bearer ${user.token}`,
    // };


    useEffect(() => {
        axios.post('https://flipr-yi8b.onrender.com/api/present_student', { student_id: userid })
            .then(response => {
                setSPresent(response.data.totalPresent);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        axios.post('https://flipr-yi8b.onrender.com/api/absent_student', { student_id: userid })
            .then(response => {
                setSAbsent(response.data.totalAbsent);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [userid]);

    // useEffect(() => {
    // }, [userid]);

    return (
        check ? (
            <>
                <header className=''>
                    <NavbarMain />
                </header>

                <main className='p-5'>
                    <div className=' flex flex-col md:flex-row gap-4 justify-between items-center p-6'>
                        <h1 className='text-4xl text-[#012970] font-bold text-center md:text-left'>
                            Student Dashboard
                        </h1>
                        <div className='w-fit'>
                            <Link className='' href='/student-dashboard/scanner'>
                                <p className='bg-blue-700 text-slate-50 font-semibold hover:bg-blue-900 w-fit  shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden'>
                                    {isLargerThan600 ? (
                                        <span className="">QR Scanner</span>
                                    ) : (
                                        <span className=" "><CiCamera /></span>
                                    )}
                            </p>
                            </Link>
                        </div>
                    </div>
                    <p className=' font-extrabold text-[#012970] text-2xl text-center p-6 pt-0'>
                        Today's Stats
                    </p>
                    <div className='flex flex-wrap justify-evenly gap-3 p-5'>
                        <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit overflow-hidden'>
                            <div>Present | Total</div>
                            <div>
                                <div className='font-normal'>{sPresent}</div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit overflow-hidden'>
                            <div>Absent | Total</div>
                            <div>
                                <div className='font-normal'>{sAbsent}</div>
                            </div>
                        </div>
                        <div className='bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit overflow-hidden'>
                            <div>Attendance | Till Today</div>
                            <div>
                                <div className='font-normal'>{((sPresent / (sPresent + sAbsent)) * 100).toFixed(1)}%</div>
                            </div>
                        </div>
                    </div>

                </main>
                <footer></footer>
            </>) : <></>
    );
};

export default StudentDashboardPage;
