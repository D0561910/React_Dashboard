import "./Navbar.css";
// import avatar

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        <a href="./subscriber">Subscriber</a>
        <a href="./video">Video</a>
        <a className="active_link" href="./admin">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="./search">
          <i className="fa fa-search"></i>
        </a>
        <a href="./history">
          <i className="fa fa-clock-o"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
