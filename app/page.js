import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=" flex flex-col content-center justify-evenly h-[75vh] p-5">
        <h1 className=" text-center text-4xl text-[#012970] ">Welcome to <span className=" font-bold">EDU</span>sync</h1>
        <div className="flex justify-evenly items-center bg-gray-100">
          <div className="flex flex-col items-center justify-center w-64 h-40 bg-blue-500 m-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <Link href="/login">
              <div className="text-white text-xl">Admin Login</div>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center w-64 h-40 bg-blue-500 m-4 rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
            <Link href="/login">
              <div className="text-white text-xl">Student Login</div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
