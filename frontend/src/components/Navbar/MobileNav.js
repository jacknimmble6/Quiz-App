import React, { useState } from 'react'
import { Drawer, List, ListItem, ListItemText, IconButton, makeStyles, Typography } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import pic from '../images/logo.png'

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "blue",
        fontSize: "20px",
    },
    icon:{
        color: "white"
    },
    pic: {
        height: '70px'
    }
}));

const MobileNav = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div>
          <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <List>

              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to='/' color='secondary'>
                    <img src={pic} alt='logo' className={classes.pic}/>
                  </Link>
                </ListItemText>
              </ListItem>

              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link to='/create' color='inherit' style={{ textDecoration: 'none' }}> 
                    <Typography className={classes.create}>
                      Create a Quiz
                    </Typography>
                  </Link>
                </ListItemText>
              </ListItem>

            </List>
          </Drawer>

          <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
          </IconButton>
        </div>
    )
}

export default MobileNav
