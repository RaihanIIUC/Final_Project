import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import Sidebar from "../../components/Layout/Sidebar";
import Loader from "../../components/Loader/Loader";
import {
  categoryAddAction,
  getCategoryByIdAction,
  getAllCategoryAction,
  editCategoryAction,
} from "../../_actions/categoryAction";
import Auth from "../../_helpers/auth";
import Home from "../Home/Home";
 
function EditUser() {
  const uid  = useParams();
  console.log(uid, NaN, "id");
  const dispatch = useDispatch();
  const [restloader, setrestLoader] = useState(true);
  const { user  } = useSelector((store) => store.userStore);
  const { userInfo } = user;

  const [userUpdate, setUserUpdate] = useState({
     email: user.email,
     username: user.username,
     password: user.password,
     firstname: user.firstname,
     lastname: user.lastname,
     address: {
       city: user.address?.city,
       street: user.address?.street,
       number: user.address?.number,
       zipcode: user.address?.zipcode,
       geolocation: {
         lat: user.address?.geolocation.lat,
         long: user.address?.geolocation.long,
       },
     },
     phone: user.phone,
   });

   console.log(userInfo, null, " user data");

  const UserDataUpdate = (e, key) => {
    setUserUpdate({
      ...userUpdate,[key]: e.target.value,
      address: { ...userUpdate.address, [key]: e.target.value },
      geolocation: { ...userUpdate.address.geolocation, [key]: e.target.value },
    });
  };

  const UserUpdateHandler = (e) => {
    e.preventDefault();
    // dispatch(editCategoryAction(userUpdate));
  };

  useEffect(() => {
    // dispatch(getCategoryByIdAction(cid));

    setInterval(() => {
      setrestLoader(false);
    }, 2000);
  }, [restloader]);

  return (
    <Home>
      <div className="form">
        <div className="subtitle">User </div>
        <div className="input-container ic1">
          <input
            id="categoryName"
            className="input"
            type="email"
            onChange={(e) => UserDataUpdate(e, "email")}
          />
          <label className="placeholder"> </label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.username}
            onChange={(e) => UserDataUpdate(e, "username")}
          />
          <label className="placeholder">{userUpdate.username}</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="password"
            placeholder=" "
            value={userUpdate.password}
            onChange={(e) => UserDataUpdate(e, "password")}
          />
          <label className="placeholder">Password</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=""
            value={userUpdate.firstname}
            onChange={(e) => UserDataUpdate(e, "firstname")}
          />
          <label className="placeholder">Firstname</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.lastname}
            onChange={(e) => UserDataUpdate(e, "lastname")}
          />
          <label className="placeholder">lastname</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.city}
            onChange={(e) => UserDataUpdate(e, "city")}
          />
          <label className="placeholder">City</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.street}
            onChange={(e) => UserDataUpdate(e, "street")}
          />
          <label className="placeholder">street</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.number}
            onChange={(e) => UserDataUpdate(e, "number")}
          />
          <label className="placeholder">number</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.zipcode}
            onChange={(e) => UserDataUpdate(e, "zipcode")}
          />
          <label className="placeholder">zipcode</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.geolocation.lat}
            onChange={(e) => UserDataUpdate(e, "lat")}
          />
          <label className="placeholder">lat</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.address.geolocation.long}
            onChange={(e) => UserDataUpdate(e, "long")}
          />
          <label className="placeholder">long</label>
        </div>
        <div className="input-container ic2">
          <input
            id="description"
            className="input"
            type="text"
            placeholder=" "
            value={userUpdate.phone}
            onChange={(e) => UserDataUpdate(e, "phone")}
          />
          <label className="placeholder">phone</label>
        </div>

        <button type="submit" className="submit" onClick={UserUpdateHandler}>
          User Update
        </button>
      </div>
    </Home>
  );
}

export default EditUser;
