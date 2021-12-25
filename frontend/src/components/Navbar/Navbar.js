import React from 'react'
import { AppBar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Toolbar } from '@material-ui/core'
import useStyles from './styles'
import { Link } from 'react-router-dom'
import pic from '../images/logo.png'
import MobileNav from './MobileNav'

const Navbar = () => {
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));  

    return (
        <AppBar position='static' className={classes.appbar}>
            <Toolbar>
              {isMobile ? (
                <MobileNav />
              ) : (
                <>     
                <Link to='/' color='secondary'>
                    <img src={pic} alt='logo' className={classes.pic}/>
                </Link>

                <Link to='/create' color='inherit' style={{ textDecoration: 'none' }}> 
                      <Typography className={classes.create}>
                          Create a Quiz
                      </Typography>
                </Link>
                </>
              )}
            </Toolbar> 
        </AppBar>
    )
}

export default Navbar