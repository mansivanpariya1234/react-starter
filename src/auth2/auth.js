const Auth = {
  isAuth: false,
  signin() {
    Auth.isAuth = true;
  },
  signout() {
    Auth.isAuth = false;
  },
  getAuth() {
    return Auth.isAuth;
  },
};

export default Auth;
