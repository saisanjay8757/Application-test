import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles.css";
import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import Favorite from '@material-ui/icons/Favorite';
import useStyles from './styles'




function Navbar() {
  const classes = useStyles()
  const navRef = useRef();

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useNavigate()

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setUser(null)
    history('/')

  }

  return (
    <header>
      <a className="heading" href="/"><h2>BharathTimes9</h2></a>
      <nav ref={navRef}>
        
        {user?.result.staff === "true" ?
          <Link to='/ahome'  >
            <Typography variant="h4" align="center">Admin</Typography>
          </Link> : ''}

        


        <Toolbar className={classes.toolbar}>
          {user?.result ? (
            <div className={classes.profile}>
              <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6"> Hii {user?.result.name}</Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
            </div>
          ) : (
            <Button component={Link} to="/admin" variant="contained" color="primary">Sign In / Sign Up</Button>
          )}
        </Toolbar>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;



















/*

import useStyles from './styles';


const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useNavigate()

  const classes = useStyles()




  useEffect(() => {
    const token = user?.token

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setUser(null)
    history('/')

  }

  return (
    <AppBar xs={4} sm={6} md={9} className={classes.appBar} position="static" color="inherit">

      <Link to='/' className={classes.brandContainer} >
        <Typography className={classes.heading} variant="h3" align="center">BharathTimes9</Typography>

      </Link>

      {user?.result.staff === "true" ?
        <Link to='/ahome' className={classes.brandContainer} >
          <Typography className={classes.heading} variant="h4" align="center">Admin</Typography>
        </Link> :  ''}


      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6"> {user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/admin" variant="contained" color="primary">Sign In / Sign Up</Button>
        )}
      </Toolbar>

    </AppBar>



  )
}

export default Navbar;


//<Link to='/wishlist'> <BookmarkIcon fontSize="large"/> </Link>*/