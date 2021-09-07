
const userInfos = JSON.parse(localStorage.getItem("userInfo"));
 
const Auth = {

  Admin_Role() {

    if (userInfos) {
      const { userInfo } = userInfos;
      const { role, Token } = userInfo;
      return role=== 'admin';
    }
  },
  User_Role() {
    if (userInfos) {
      const { userInfo } = userInfos;
      const { role } = userInfo;
      return role === 'user';
    }
  },
  getToken() {
    if (userInfos) {
      const { userInfo } = userInfos;
      const { token } = userInfo;
      return `bearer ${token}`;
    }
  },
};
export default Auth;
