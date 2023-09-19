import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("login");
    // setToken("this is a test token");
    // navigate("/", { replace: true });
  };

  return (
    <div className="flex w-full justify-center">
      <form
        className="flex max-w-md w-full flex-col gap-4"
        onSubmit={handleLogin}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput id="username3" placeholder="Bonnie Green" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;
