import React from "react";
import $ from "jquery";
import "./login.css";

import { useEffect } from "react";
import { useSelector } from "react-redux";

function Panda() {
  const userSignIn = useSelector((store) => store.userStore);

  const { message, userInfo } = userSignIn.user;

  if (message || userInfo) {
    console.log(message, userInfo);
  }

  useEffect(() => {
    $("#password").focusin(function () {
      $("form").addClass("up");
    });
    $("#password").focusout(function () {
      $("form").removeClass("up");
    });

    // Panda Eye move
    $(document).on("mousemove", function (event) {
      var dw = $(document).width() / 15;
      var dh = $(document).height() / 15;
      var x = event.pageX / dw;
      var y = event.pageY / dh;
      $(".eye-ball").css({
        width: x,
        height: y,
      });
    });

    // validation

    $(".btn").click(function () {
      $("form").addClass("wrong-entry");
      setTimeout(function () {
        $("form").removeClass("wrong-entry");
      }, 3000);
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
    </>
  );
}

export default Panda;
