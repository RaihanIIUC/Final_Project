import React from 'react'
import { useState } from 'react';
import "./login.css";
import $ from "jquery";
import { useEffect } from 'react';


function Login() {

 useEffect(() => {
   $('#password').focusin(function(){
  $('form').addClass('up')
});
$('#password').focusout(function(){
  $('form').removeClass('up')
});

// Panda Eye move
$(document).on( "mousemove", function( event ) {
  var dw = $(document).width() / 15;
  var dh = $(document).height() / 15;
  var x = event.pageX/ dw;
  var y = event.pageY/ dh;
  $('.eye-ball').css({
    width : x,
    height : y
  });
});

// validation


$('.btn').click(function(){
  $('form').addClass('wrong-entry');
    setTimeout(function(){ 
       $('form').removeClass('wrong-entry');
     },3000 );
});

 });
  

       return (
         <>
         {/* panda anime */}
           <div className="panda">
             <div className="ear"></div>
             <div className="face">
               <div className="eye-shade"></div>
               <div className="eye-white">
                 <div className="eye-ball"></div>
               </div>
               <div className="eye-shade rgt"></div>
               <div className="eye-white rgt">
                 <div className="eye-ball"></div>
               </div>
               <div className="nose"></div>
               <div className="mouth"></div>
             </div>
             <div className="body"> </div>
             <div className="foot">
               <div className="finger"></div>
             </div>
             <div className="foot rgt">
               <div className="finger"></div>
             </div>
           </div>
           {/* form start */}
           <form>
             <div className="hand"></div>
             <div className="hand rgt"></div>
             <h1>Panda Login</h1>
             <div className="form-group">
               <input required="required" className="form-control" />
               <label className="form-label">Username </label>
             </div>
             <div className="form-group">
               <input
                 id="password"
                 type="password"
                 required="required"
                 className="form-control"
               />
               <label className="form-label">Password</label>
               <p className="alert">Invalid Credentials..!!</p>
               <button className="btn">Login </button>
             </div>
           </form>
         </>
       );
}

export default Login;

