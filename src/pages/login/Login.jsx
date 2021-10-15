import React from 'react'
import { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { signIn, signOut } from '../../_Redux/_actions/userActions';
import "./login.css";
import Panda from './panda';


function Login() {
     const dispatch = useDispatch();
     const [restloader, setrestLoader] = useState(true);
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
   
      const userSignIn = useSelector((store) => store.userStore);
      const { error } = userSignIn;
    
 useEffect(() => {
   setInterval(() => {
     setrestLoader(false);
   }, 4000);
 }, []);
 




 
 
 
         
 
       return restloader ? (
         <Loader />
       ) : (
         <>
           <Panda />
           <form>
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
               <p className="alert">{  error }</p>
               <button className="btn" onClick={submitHandler}>
                 Sign In
               </button>
             </div>
           </form>
         </>
       );
}

export default Login;

