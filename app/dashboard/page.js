import Link from "next/link";
import NavbarMain from "../../components/NavbarMain";

const DashboardPage = () => {
  return (
    <>
      <header className="">
        <NavbarMain />
      </header>

      <main className="p-5">
        <h1 className="text-4xl text-[#012970] font-bold text-center md:text-left">
          Admin Dashboard
        </h1>
        <p className=" font-extrabold text-[#012970] text-2xl text-center mb-2">
          Today's Stats
        </p>
        <div className="flex flex-wrap justify-evenly gap-3">
          <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
            <div>Total Students</div>
            <div>
              <div className="font-normal">145</div>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
            <div>Present | Today</div>
            <div>
              <div className="font-normal">145</div>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
            <div>Absent | Today</div>
            <div>
              <div className="font-normal">145</div>
            </div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded w-full text-[#012970] font-bold md:w-fit">
            <div>Attendance | Today</div>
            <div>
              <div className="font-normal">145</div>
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link href="/dashboard/studentlist">
            <p className="bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden">
              <span>Student Management</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </p>
          </Link>
          <Link href="/dashboard/attendance">
            <p className="bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden">
              <span>Attendance Management</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </p>
          </Link>
          <Link href="/qrpage">
            <p className="bg-white shadow-md rounded px-4 py-2 flex justify-between items-center overflow-hidden">
              <span>Generate QR Code</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </p>
          </Link>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default DashboardPage;
