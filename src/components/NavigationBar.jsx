import { Avatar, Navbar, Dropdown, Button } from "flowbite-react";
import { useAuth } from "../provider/authProvider";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NavigationBar = () => {
  const { token, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  const logout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Good Listens
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {token ? (
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
          </Dropdown>
        ) : (
          <></>
        )}
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active={location.pathname === "/"} href="/">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>

        {!token && (
          <Navbar.Link active={location.pathname === "/login"} href="/login">
            Login
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
