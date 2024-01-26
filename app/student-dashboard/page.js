'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarMain from "../../components/NavbarMain";
import { UseSelector, useSelector } from "react-redux";
export const StudentDashboardPage = () => {

    const[check,setCheck] = useState(false);
    useEffect( () => {
      const cookieValue = document.cookie.split('=')[1];
      const headers = {
        Authorization: `Bearer ${cookieValue}`
      }
       axios.get("https://flipr-yi8b.onrender.com/api/test2",
       {headers}
       )
        .then((response) => {
          console.log("SUCCESS");
          setCheck(true);})
        .catch((error) => {
          window.location.href = '/';   
    }
      ); 
    }, []);
    const [error, setError] = useState(null);
    const user = useSelector(state => state.user);
    // console.log(user);
    const headers = {
        Authorization: `Bearer ${user.token}`,
    };
    //   const [data, setData] = useState(0);
    //   useEffect(() => {

    //       axios.get('https://flipr-yi8b.onrender.com/api/test2', {headers})
    //       .then(response => {
    //           console.log(response);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    //     }, []);

    const [sPresent, setSPresent] = useState(0);
    const userid = parseInt(localStorage.getItem('UserID'));
    useEffect(() => {

        axios.post('https://flipr-yi8b.onrender.com/api/present_student',{student_id: userid})
            .then(response => {
                setSPresent(response.data.totalPresent);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const [sAbsent, setSAbsent] = useState(0);
    useEffect(() => {

        axios.post('https://flipr-yi8b.onrender.com/api/absent_student',{student_id: userid})
            .then(response => {
                setSAbsent(response.data.totalAbsent);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    //   useEffect(() => {

    //     axios.get('https://flipr-yi8b.onrender.com/api/total_students')
    //       .then(response => {
    //         setData(response.data.totalStudents);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching data:', error);
    //       });
    //   }, []);

    return (
        check ? (
        <>
            <header className="">
                <NavbarMain />
            </header>

            <main className="p-5">
                <div className=" flex flex-row justify-between items-center p-6">
                    <h1 className="text-4xl text-[#012970] font-bold text-center md:text-left">
                        Student Dashboard
                    </h1>
                    <div className=" w-fit  ">
                        <Link className="" href="/student-dashboard/scanner">
                            <p className="bg-blue-700 text-slate-50 font-semibold hover:bg-blue-900 w-full shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden">
                                <span>QR Scanner</span>
                            </p>
                        </Link>
                    </div>
                </div>
                <p className=" font-extrabold text-[#012970] text-2xl text-center p-6 pt-0">
                    Today's Stats
                </p>
                <div className="flex flex-wrap justify-evenly gap-3 p-5">
                    <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
                        <div>Present | Total</div>
                        <div>
                            <div className="font-normal">{sPresent}</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
                        <div>Absent | Total</div>
                        <div>
                            <div className="font-normal">{sAbsent}</div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
                        <div>Attendance | Till Today</div>
                        <div>
                            <div className="font-normal">{((sPresent/(sPresent+sAbsent))*100).toFixed(1)}%</div>
                        </div>
                    </div>
                </div>

            </main>
            <footer></footer>
        </>) : <></>
    );
};

export default StudentDashboardPage;
