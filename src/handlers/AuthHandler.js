import axios from "axios";

const api_url = process.env.REACT_APP_API_URL;
const login_url = api_url + "/login";

const handleLogin = async (username, pass) => {
  //reqres registered sample user
  const loginPayload = {
    username: username,
    password: pass,
  };

  console.log(loginPayload);

  return axios
    .post(login_url, loginPayload)
    .then((response) => {
      const token = response.data.accessToken;
      console.log(token);
      return token;
    })
    .catch((err) => {
      console.log("error", err);
      return null;
    });
};

export default handleLogin;
