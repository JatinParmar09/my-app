'use client'
import React, { useEffect } from 'react'

const SignOut = () => {
    useEffect(() => {
        localStorage.clear();
        var cookies = document.cookie;

for (var i = 0; i < cookies.split(";").length; ++i)
{
    var myCookie = cookies[i];
    var pos = myCookie?.indexOf("=");
    var name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
}
document.cookie = `token=; HttpOnly:  SameSite=None; Secure;`;
    }, [])
    const handleChange = () => {
        window.location.href = '/';
    }
    // localStorage.clear();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold mb-4">Signed Out Successfully</h1>
    <div className="mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none" onClick={handleChange}>Login Page</button>
    </div>
</div>
  )
}

export default SignOut