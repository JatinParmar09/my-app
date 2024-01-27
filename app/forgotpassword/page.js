'use client';
import Navbar from "../../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
export default function forgotpassword() {
  const showToast = (e) => {
    e.preventDefault();
    axios.post("https://flipr-yi8b.onrender.com/api/email", {
        email: e.target.name.value,
      })
      .then((response) => {
        // console.log(response.data);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <ToastContainer />
      <div className="grid place-items-center h-[75vh]">
        <div className="flex flex-col items-center justify-center bg-white w-96 h-fit rounded-md shadow-lg">
          <form
            onSubmit={showToast}
            className="flex flex-col gap-4 m-0 p-3 w-96"
          >
            <label htmlFor="name">
              Email
              </label>
              <input
                className="block w-full rounded-md border-0 p-1 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                placeholder="Enter your e-mail"
                type="email"
                name="name"
                id="name"
              />
            <button
              type="submit"
              className="bg-[#4154F1] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Confirm!
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
