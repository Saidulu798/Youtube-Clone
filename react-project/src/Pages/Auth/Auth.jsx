import React from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import { Link } from 'react-router-dom'
function Auth({ User, setAuthBtn, setEditCreateChanelBtn }) {
    const dispatch=useDispatch();
    const onLogOutSuccess=()=>{
        dispatch(setCurrentUser(null));
        alert("Log Out SuccessFully");
    }
 return (
<div className='Auth-container' onClick={()=>setAuthBtn(false)}>
  <div className="Auth-container2">
    <p className="User-Details">
      <div className="Chanel-logo">
        <p className="fst-logo-app">
            {User?.result.name ?(
            <>{User?.result.name.charAt(0).toUpperCase()} </>
            ):(
            <>{User?.result.email.charAt(0).toUpperCase()}</>
            )}
            </p>
            </div>
            <div className="email-Auth">{User?.result.email}</div>
    </p>
    <div className="btns-Auth">
      {
        User?.result.name ?<>
        {
          <Link to={`/chanel/${User?.result._id}`} className="btn-Auth"> 
             Your Chanel
          </Link>
        }
         
        </>:<>
        <input type="submit" 
        className='btn-Auth' 
        value="Create Your Chanel" 
        onClick={()=>setEditCreateChanelBtn(true)}
        />
        </>
      }
    <div>
        <GoogleLogout
          clientId={
            '869156316873-u35d6qglh43qj9ep9psolgh8juo1scai.apps.googleusercontent.com'
        }
        onLogOutSuccess={onLogOutSuccess}
        render={(renderProps)=>(
    <div onClick={renderProps.onClick} className='btn-Auth'>
        <BiLogOut/>
           Log Out
    </div>
        )}
        />
    </div>
    </div>
    </div>   
    </div>
  )
}

export default Auth