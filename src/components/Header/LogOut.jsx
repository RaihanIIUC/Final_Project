import React from 'react';
 import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { signOut } from '../../_actions/userActions';
import { history } from '../../_helpers/history';

 function LogOutMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
 const dispatch =  useDispatch();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

   const handleLogout = () => {
       dispatch(signOut());
       handleClose();
       console.log('hello you are logged out!!!')
      };

      
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Profile
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
export default LogOutMenu;