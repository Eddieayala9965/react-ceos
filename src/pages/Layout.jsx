import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const primaryNav = [
  { title: "Home", url: "/" },
  { title: "CEOs", url: "/ceos" },
];

const Layout = () => {
  return (
    <>
      <Nav navItems={primaryNav} />
      <Outlet />
    </>
  );
};

export default Layout;
