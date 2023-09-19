import NavigationBar from "../components/NavigationBar";
const DefaultLayout = ({ children }) => (
  <div>
    <NavigationBar />
    {children}
  </div>
);

export default DefaultLayout;
