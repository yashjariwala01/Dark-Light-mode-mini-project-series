import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

const Navbar = () => {
    const {theme,setTheme} = useTheme();

    const toggleMode=()=>{
        setTheme();
    }
  return (
    <nav className={`navbar flex gap-5 ${theme}`}>
       <div className='flex gap-5 '>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contactus'>Contact Us</Link>
        </div> 
             <div className="mode-switch">
        <label>
          <input
            type="checkbox"
            onChange={toggleMode}
            checked={theme === "dark"}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  )
}

export default Navbar
