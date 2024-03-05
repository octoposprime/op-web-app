import React from 'react';
import '../app/globals.css'

export default function Home() {
  return (
    <div className="login-container">
      <div className="rectangle-1379">
        {/* Assuming 'Your Logo' is text. If it's an image, use <img> tag instead */}
        <div className="your-logo">
          Your Logo
        </div>
        <div className="login-title">
          Login
        </div>
        <form className="fields">
          <label htmlFor="email" className="email-label">
            Email
          </label>
          <input type="email" id="email" className="rectangle-1381" placeholder="username@gmail.com" />
          
          <label htmlFor="password" className="password-label" >

            Password
          </label>
          <input type="password" id="password" className="rectangle-1382" placeholder='password' />
          
          <button type="submit" className="rectangle-1383">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
