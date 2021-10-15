import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RouterPath } from "../../_Redux/_helpers/RoutePath";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useHistory } from "react-router";
 import AddCircleIcon from "@mui/icons-material/AddCircle";
  
import { Link } from "react-router-dom";
import { getAllUserAction, requestDeleteUser } from "../../_Redux/_actions/userActions";
import { Wrapper } from "../CartList/CartItem.styles";
import Home from "../Home/Home";
import styled from 'styled-components'

const AddNew = styled(AddCircleIcon)`
  border: 1px solid #000;
  width: 100%;
  height: 70px;
  background-color: black;
  color: white;
 `;

const UserList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.userStore);

  console.log(users, NaN, " category");

  useEffect(() => {
    dispatch(getAllUserAction());
  }, []);

  const userdeleteHandler = (uid, user) => {
    dispatch(requestDeleteUser(uid, user));
    console.log("user Deleted");
  };

  return (
    <Home>
      <Link to="">
        <AddNew />
      </Link>

      {users.map((user, index) => {
        return (
          <>
            <Wrapper>
              <div key={index}>
                <h3>{user.role}</h3>
                <div className="information">
                  <p>{user?.email}</p>
                </div>
                <div className="buttons"></div>
                <p onClick={() => userdeleteHandler(user._id, user)}>
                  <DeleteForeverIcon />
                </p>
              </div>
              <Button>
                <Link to={`${RouterPath.USER_EDIT_PAGE}/${user._id}`}>
                  Edit
                </Link>
              </Button>
            </Wrapper>
          </>
        );
      })}
    </Home>
  );
};

export default UserList;
