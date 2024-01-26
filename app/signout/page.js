'use client'
import React, { useEffect } from 'react'

const SignOut = () => {
    useEffect(() => {
        localStorage.clear();
        var cookies = document.cookie;

for (var i = 0; i < cookies.split(";").length; ++i)
{
    var myCookie = cookies[i];
    var pos = myCookie.indexOf("=");
    var name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
}
document.cookie = `token=; HttpOnly:  SameSite=None; Secure;`;
    }, [])
    const handleChange = () => {
        window.location.href = '/';
    }
    // localStorage.clear();
  return (
    <div>
        <h1>Signing Out</h1>
        <div>
            <button onClick={handleChange}>LoginPage</button>
        </div>
    </div>
  )
}

export default SignOut