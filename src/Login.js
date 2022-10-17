
import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useEffect } from 'react';
import { CommentsDisabledOutlined, Login } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
// import Home from './Home';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { check } from 'prettier';




// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color='#4a148c'>
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

function Logi() {

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [errorLogin, setErrorLogin] = useState('');
  const [open, setOpen] = useState(false);
  const [userData,setUserData] = useState([]);
  // const [name, setName] = useState('');
  //  const [pwd, setPwd] = useState('');

  //  const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };
  const [check,setCheck] = useState('');
  
  const checked =() => {
    
    // if(check=='true')
    // {
    //   userData=email;
    //   userData=pass;
    // }
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  // // const [values, setValues] = React.useState({
  // //   password: "",
  // //   showPassword: false,
  // })
  const handleClickShowPassword = () => {
    setIsVisible(!isVisible);
    //    // setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const New = () => {
    navigate('/Newuser')
  }
  useEffect(()=>{
   
         if(localStorage.getItem('userData') !== null){
         let data = JSON.parse(localStorage.getItem('userData'))
         setEmail(data.email)
         setPass(data.password)
         }
  },[])

  const handleSubmit = (event) => {

    event.preventDefault();



    const fetchData = async () => {
      const response = await axios.get("http://localhost:3333/data").then((response) => {

        // console.log(response.data);
        let flag = '';
        let errorFlag = '';
        let userData = '';

        response.data.map((index) => {
          if (email !== '') {
            if (index.email == email) {
              if (index.password == pass) {
                flag = 1
                userData = index
                console.log(userData.email);
                if(check){
                 
                  localStorage.setItem('userData', JSON.stringify(userData))   //localStorage

                }else{

                  sessionStorage.setItem('userData', JSON.stringify(userData))     //SessionStorage
                }
                 
              }
              else {
                console.log('password is wrong');
              }
            } else {
              errorFlag = 2
            }


          }else{
            console.log('Please enter the filled');
          }
        })
        if (errorFlag == 2) {
          console.log("email id is wrong")
        }
        if (flag == 1) {
          console.log("Successfully")
          navigate('/home');

        } else {


          setErrorLogin("Login Error!")
          console.log("Unsuccessful")
          handleClick();
        }
        // setUser(response.data);
      })
    };
    fetchData();
    console.log(email);

  }
  return (
    <>

      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgColor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <span style={{ color: 'red' }}>{errorLogin}</span>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                value={email}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setEmail(e.target.value)}

              />
              <FormControl sx={{ mt: 1, width: '50ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  // margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={isVisible ? "text" : "password"}
                  // // type={value.showPassword ? "text" : "password"}        
                  id="password"
                  autoComplete="current-password"
                  // autoFocus
                  onChange={e => setPass(e.target.value)}
                  value={pass}
                  //onChange={e => setPass(e.target.value)}

                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {isVisible ? <Visibility /> : <VisibilityOff />}
                        {/* {value.Show.password ? <Visibility /> : <VisibilityOff />} */}
                      </IconButton>
                    </InputAdornment>

                  }


                // label="password"
                />

              </FormControl>

              <FormControlLabel
                control={<Checkbox value="remember" 
                // onChange={remember}
                onChange={e => setCheck(e.target.value)}
                color="primary" />}
                
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}

              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <a style={{ cursor: "pointer" }} onClick={New} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </a>
                </Grid>
              </Grid>
            </Box>
          </Box>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </ThemeProvider>
      <div>
        <Snackbar
          open={open}
          autoHideDuration={10000}
          onClose={handleClose}
          message="Login Unsuccessfully"
          action={action}
        />
      </div>
    </>
  );
}
export default Logi