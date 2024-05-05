import React,{useEffect,useState} from 'react'
import './Navbar.css'
import logo from './you-tube.png'
import Searchbar from './Searchbar/Searchbar'
import { RiVideoAddLine } from "react-icons/ri"
import { IoMdNotificationsOutline } from "react-icons/io"
import { BiUserCircle } from "react-icons/bi"
import { Link } from "react-router-dom"
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/auth'
import Auth from '../Pages/Auth/Auth'
function Navbar({ toggleDrawer,setEditCreateChanelBtn }) {

  const [AuthBtn, setAuthBtn] = useState(false)
  
  //const CurrentUser=null;
  // const CurrentUser ={
  //   result:{
  //     email: "xyz@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.4892",
  //   },
  // };
  
  const CurrentUser = useSelector (state=>state.currentUserReducer)
  //console.log(CurrentUser)
  useEffect(() => {
    function start() {
      gapi.client.init({
      clientId:
      "869156316873-u35d6qglh43qj9ep9psolgh8juo1scai.apps.googleusercontent.com",
      scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const dispatch = useDispatch();
  const logTmp=()=>{
    dispatch(login({ email:"mahiroczzs123@gmail.com" }));
  }
     
  //   const dispatch = useDispatch();
  //   const onSuccess= (response) => {
  //   const Email= response?.profileObj.email;
  //   console.log(Email);
  //   dispatch(login({ email: Email }));
  // };
  // const onFailure= (response)=> {
  //   console.log("Failed",response);
  // };
  return (
    <>
   <div className="Container">
    <div className="Logo-Navbar">
     <div className="Menu-bar"onClick={() => toggleDrawer()}>
        <p></p>
        <p></p>
        <p></p>
    </div>   
    <Link to={'/'} className='logo-nav'>
        <img src={logo} alt="LOGO" />
        <p className='logo-title'>YouTube</p>
    </Link>
   </div>
    <Searchbar/>
    <RiVideoAddLine size={25} className={"vid-bell"}/>
    <div className="Apps-Box">
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
      <p className="App-Box"></p>
    </div>
    <IoMdNotificationsOutline size={25} className='Bell-icon'/>
   <div className="cont-navbar">
    {CurrentUser ? (
     <>
     <div className="Chanel-logo" onClick={()=>setAuthBtn(true)}>
      <p className='fst-logo-app'>
          {CurrentUser?.result.name ?(
        <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
           ):(
        <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
        )}
        </p>
        </div>
        </>
      ):(
        <>
        <GoogleLogin
        clientId={'869156316873-u35d6qglh43qj9ep9psolgh8juo1scai.apps.googleusercontent.com'}
        // onSuccess={onSuccess}
        // onFailure={onFailure}
          render={(renderProps)=>(
     //<p onClick = {renderProps.onClick} className="Btn">
       <p onClick={logTmp} className='Btn'>
      <BiUserCircle  size={25}/>
      <b>Sign in</b>
    </p>
     )}
     />
     
    </>
    )}
   </div>
   </div>
   {
    AuthBtn &&
     <Auth
     setEditCreateChanelBtn={setEditCreateChanelBtn}
     setAuthBtn={setAuthBtn}
     User={CurrentUser}
     />
   }
   </>
  )
}

export default Navbar