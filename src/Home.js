import { Email, Logout, SettingsPhoneTwoTone } from '@mui/icons-material'
import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { style } from '@mui/system';
import Login from './Login';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link ,Outlet} from 'react-router-dom';
// import App from './App'
import { useNavigate} from 'react-router';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
const drawerWidth = 240;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


function Home() {

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
   const navigate = useNavigate();
   const [ show, setShow ]  = useState(true);

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );
  
  
  



    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
  const handleChange = (event) => {
    setAuth(event.target.checked);
    navigate('/Login');
    let userData = JSON.parse(sessionStorage.removeItem('userData'));

    
  };

//   const remove = () =>{
//  let userData = JSON.parse(sessionStorage.removeItem('userData'));
//   }

const productlist=() =>{
  navigate('/Productlist')
}
const card=()=>{
  console.log('cardddd');
  // setShow(true);
  navigate('/home/Carts')
}
  const Logout = () => {
    
        navigate('/Login');
    let userData = JSON.parse(sessionStorage.removeItem('userData'));

    
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
      //localStorage
   let userData = JSON.parse(sessionStorage.getItem('userData'));
   let localData = JSON.parse(localStorage.getItem('userData'));
  console.log(userData)
  

 // session storage
  // let userData = JSON.parse(sessionStorage.getItem('userData'))
  return (
    <>
        <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{backgroundColor:'#8d6e63', justifyContent:'space-between'}}>
        <Toolbar style={{justifyContent:'space-between'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Product List
            </Typography>
          <IconButton aria-label="cart" style={{justifyContent:'space-between'}}
          // onClick={navigate('/Card')}
          onClick={card}
        
          >
      <StyledBadge badgeContent={2} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
     
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:'#e0e0e0'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader style={{background:'#8d6e63'}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        
          {/* {['Product List', 'Add Product', 'Admin', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          <ListItem disablePadding>
            <ListItemButton
            style={{display:'flex',justifyContent:'center'}}>
              <List>
          <Link style={{ display:'flex',textDecoration:'none', justifyContent:'center', alignItem:'center',marginTop:'20px' }} to='Productlist'>Productlist</Link> <br></br>
         
          </List>
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton
            style={{display:'flex',justifyContent:'center'}}>
              <List>
          <Link style={{ display:'flex', textDecoration:'none', justifyContent:'center', alignItem:'center',marginTop:'30px' }} to='Carts'>cart</Link><br></br>
         
          </List>
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
            <ListItemButton
            style={{display:'flex',justifyContent:'center'}}>
              <List>
              <Link style={{ display:'flex', textDecoration:'none',justifyContent:'center', alignItem:'center',marginTop:'40px' }} to='AddProduct'>Add Product</Link>
         
          </List>
        </ListItemButton>
        </ListItem>
        
        <Toolbar>
        {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        
        </Typography>
        {auth && (
          <div style={{ display:'flex', alignItems:'center',marginTop:'120px' }}>
             <div>
               {localData?.email}
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
            </div>
        )}
      </Toolbar>
        <Divider />
      </Drawer>
      <Main open={open}>
      <Outlet />
        
     
      </Main>
    </Box>
   
    {/* <Box sx={{ flexGrow: 1 }}>
    <FormGroup style={{alignItems:'flex-end'}}>
      <FormControlLabel
        control={ 
          <Switch
            checked={auth}
            onChange={handleChange}
            aria-label="login switch"
             
            
          />
        }
        label={auth ? 'Logout' : 'Login'}
      />
    </FormGroup>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashborad
        </Typography>
        {auth && (
          <div style={{ display:'flex', alignItems:'center'}}>
             <div>
               {localData?.email}
            </div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
            
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
            </div>
        )}
      </Toolbar>
    </AppBar>
       
      <h3>{userData?.id} {localData?.id}</h3>
      <h3>{userData?.first_name}{userData?.last_name}{localData?.first_name}{localData?.last_name}</h3>
      <h3>{userData?.email}{localData?.email}</h3>
      <button onClick={remove}>delete</button>

  </Box> */}
  </>

);
}


export default Home
