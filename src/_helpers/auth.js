 

const Auth = {
   authenticate() {
    
  },
  Admin_Role() {
    const userInfos = JSON.parse(localStorage.getItem("userInfo"));
    const { userInfo } = userInfos;
    const { role , Token } = userInfo;
    return role ;
  },
  User_Role() {
    const userInfos = JSON.parse(localStorage.getItem("userInfo"));
    const { userInfo } = userInfos;
    const { role , Token } = userInfo;
    return role ;
  },
  getToken() {
        const userInfos = JSON.parse(localStorage.getItem("userInfo"));
        const { userInfo } = userInfos;
        const { role, Token } = userInfo;
        return `bearer ${Token}`;
  },
};
export default Auth;
