import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import handleLogin from "../handlers/AuthHandler";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const clickLogin = async (e) => {
    e.preventDefault();
    const t = await handleLogin(username, password);

    if (t) {
      setToken(t);
      navigate("/", { replace: true });
    } else {
      console.log("Login failed");
      setError("Login failed");
    }
  };

  return (
    <div className="">
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="flex w-full justify-center">
        <form
          className="flex max-w-md w-full flex-col gap-4"
          onSubmit={(e) => clickLogin(e)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username" value="Username" />
            </div>
            <TextInput
              id="username3"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              id="password1"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
            />
          </div>
          {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
          <Button type="submit">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
