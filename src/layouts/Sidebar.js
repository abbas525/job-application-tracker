import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Add Job",
    href: "/add-job",
    icon: "bi bi-briefcase",
  },
  {
    title: "All Applications",
    href: "/applications",
    icon: "bi bi-card-checklist",
  },
  
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-0">
      <div className="d-flex align-items-center p-3">
        {/* <Logo /> */}
        <h2 className="text-white fs-4 fw-bold">Job Applications<br /> Tracking</h2>
        <span className="ms-auto d-lg-none">
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={() => showMobilemenu()}
        ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <NavLink
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-white nav-link p-3"
                    : "nav-link text-white p-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
