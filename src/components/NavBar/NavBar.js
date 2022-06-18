import React from 'react'
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
    <div className={classes.nav}>
        <div className={classes.logo}>
          <i className='fas fa-mountain'></i>
          <h4>Mountains</h4>
        </div>
        <div className={classes.navlinks}>
           <div className={classes.link}> <h5>Home </h5> </div>  
           <div className={classes.link}> <h5> About</h5> </div>  
           <div className={classes.link}> <h5> Service </h5> </div>  
           <div className={classes.link}> <h5>Contact Us </h5> </div>  
        </div>
    </div>
  )
}

export default NavBar