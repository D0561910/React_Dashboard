import "./navbar.module.css";
import avatar from "../../images/avatar.png";
import classes from "./navbar.module.css";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_icon} onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={classes.navbar__left}>
        {/* <a href="./subscriber">Subscriber</a>
        <a href="./video">Video</a> */}
        <a className={classes.active_link} href="./admin">
          Admin
        </a>
      </div>
      <div className={classes.navbar__right}>
        <a href="/search">
          <i className="fa fa-search"></i>
        </a>
        <a href="/history">
          <i className="fa fa-clock-o"></i>
        </a>
        <a href="/profile">
          <img width="30" src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
