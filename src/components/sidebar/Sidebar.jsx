import "./sidebar.module.css";
import logo from "../../images/panda.png";
import classes from "./sidebar.module.css";
// Using Firebase.
// import { logout } from "../../helpers/auth";
// Using fake backend API
import { signOutAPI } from "../../helpers/auth";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      // Using firebase logout.
      // await logout();
      // Using backend API signout.
      await signOutAPI();
      window.location.href = "/";
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div
      className={sidebarOpen ? classes.sidebar_responsive : ""}
      id={classes.sidebar}
    >
      <div className={classes.sidebar__title}>
        <div className={classes.sidebar__img}>
          <img src={logo} alt="logo" />
          <h1>Charles Blog</h1>
        </div>
        <i
          className="fa fa-times"
          id="sidebarIcon"
          onClick={() => closeSidebar()}
        ></i>
      </div>
      <div className={classes.sidebar__menu}>
        <div className={`${classes.sidebar__link}`}>
          <i className="fa fa-home"></i>
          <a href="./dashboard">Dashboard</a>
        </div>
        <div className={classes.sidebar__link}>
          <i className="fa fa-user-secret"></i>
          <a href="./cryptocurrency">Cryptocurrency</a>
        </div>
        <div className={classes.sidebar__logout}>
          <i className="fa fa-power-off"></i>
          <a href="#!" onClick={handleLogout}>
            Log out
          </a>
        </div>
        {/* <h2>Management</h2>
        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <a href="./admin_Management">Admin Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a href="./company">Company Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="./Employee">Employee Management</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-archive"></i>
          <a href="./warehouse">Warehose</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-handshake-o"></i>
          <a href="./contracts">Contracts</a>
        </div>
        <h2>LEAVE</h2>
        <div className="sidebar__link">
          <i className="fa fa-question"></i>
          <a href="./request">Request</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-sign-out"></i>
          <a href="./leave_policy">Leave Policy</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-calendar-check-o"></i>
          <a href="./specialDays">Special Days</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-files-o"></i>
          <a href="apply_for_leave">Apply for leave</a>
        </div>
        <h2>PAYROLL</h2>
        <div className="sidebar__link">
          <i className="fa fa-money"></i>
          <a href="./payroll">Payroll</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-briefcase"></i>
          <a href="./paygrade">Paygrade</a>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
