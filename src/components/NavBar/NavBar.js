import React, {useState} from 'react'
import classes from './NavBar.module.css'
import './link.css'
const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const handleNavLink = ()=> setToggleNav(!toggleNav);

  return (
    <div className={classes.nav}>
        <div className={classes.logo}>
          <i className='fas fa-mountain'></i>
          <h4>Mountains</h4>
        </div>
        <div className={toggleNav ? 'navlinks active': 'navlinks'}>
           <div className='link'> <h5>Home </h5> </div>  
           <div className='link'> <h5> About</h5> </div>  
           <div className='link'> <h5> Service </h5> </div>  
           <div className='link'> <h5>Contact Us </h5> </div>  
        </div>
        <div onClick={handleNavLink} className='hamburgToggle'>
            <i className='fas fa-bars fa-lg'></i>
        </div>
    </div>
  )
}

export default NavBar