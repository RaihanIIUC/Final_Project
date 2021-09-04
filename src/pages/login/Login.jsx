import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn, signOut } from '../../_actions/userActions';
import "./login.css";
import Panda from './panda';
  

function Login() {
     const dispatch = useDispatch();

      //state for user 
  const [user , setUser ] = useState({
   email : '',
   password : ''
  });
  
  const UserData =(e ,key) => {
    setUser({...user, [key] : e.target.value })
  }

  const submitHandler =(e) => {
     e.preventDefault();

     dispatch(signIn(user));
   }

   const logOut = () => {
     dispatch(signOut());
     console.log('===out');
   }
    const userSignIn = useSelector((store) => store.userStore);
   

      const userInfos = JSON.parse(localStorage.getItem("userInfo"));
       const { loggedIn } = userSignIn;
      const { message , userInfo } = userSignIn.user
 
       if(message || userInfo || loggedIn){
         console.log(message , userInfo , loggedIn);
         console.log(userSignIn , loggedIn);
       }
 
       return (
         <>
                <Panda />
               {/* form start */}
               <form onSubmit={submitHandler}>
                 <div className="hand"></div>
                 <div className="hand rgt"></div>
                 <h1>Panda Login</h1>
                 <div className="form-group">
                   <input
                     required="required"
                     className="form-control"
                     placeholder="Enter Email"
                     value={user.email}
                     onChange={(e) => UserData(e, "email")}
                   />
                   <label className="form-label">Username </label>
                 </div>
                 <div className="form-group">
                   <input
                     id="password"
                     type="password"
                     required="required"
                     className="form-control"
                     value={user.password}
                     onChange={(e) => UserData(e, "password")}
                   />
                   <label className="form-label">Password</label>
                   <p className="alert">{message}</p>
                   <button className="btn" type="submit">
                     Sign In 
                   </button>
                 </div>
               </form>
          
         </>
       );
}

export default Login;

