import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  body {
    background-color: #2ecc71;
    font-family: source-sans-pro, sans-serif;
  }

  h1 {
    margin-left: auto;
    margin-top: 50px;
    text-align: center;
    font-weight: 100;
    font-size: 2.8em;
    color: #ffffff;
  }

  div {
    width: 500px;
    margin-top: 150px;
  }

  .formStyle {
    background-color: #2ecc71;
    padding: 20px;
    width: 400px;
    margin-bottom: 20px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #ecf0f1;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    font-size: 1em;
    font-weight: 100;
    color: #ffffff;
  }

  .formButton {
    /* float: right; */
    background-color: #ffffff;
    display: inline-block;
    color: #2ecc71;
    font-size: 28px;
    font-weight: 500;
    padding: 6px 24px;
    margin-top: 15px;
    margin-right: 60px;
    text-decoration: none;
  }

  .formButton:hover {
    background-color: #27ae60;
    color: #ffffff;
  }

  .formButton:active {
    position: relative;
    top: 3px;
  }

  /*To remove the outline that appears on clicking the input textbox*/
  input:focus {
    outline: none;
  }

  /* To format the placeholder text color */
  ::-webkit-input-placeholder {
    color: #ecf0f1;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: #ecf0f1;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #ecf0f1;
  }

  :-ms-input-placeholder {
    color: #ecf0f1;
  }
`;
function CartInsert() {
  return (
    <>
      <FormWrapper>
        <div>
          <input
            type="text"
            name="name"
            class="formStyle"
            placeholder="Name (required)"
            required
          />
          <input
            type="email"
            name="email"
            class="formStyle"
            placeholder="Email (required)"
            required
          />
          <Link to="#" class="formButton">
            Subscribe
          </Link>
        </div>
      </FormWrapper>
    </>
  );
}

export default CartInsert;
