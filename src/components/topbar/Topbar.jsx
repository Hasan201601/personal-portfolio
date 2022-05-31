import "./Topbar.scss";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Hasan.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span> +880 1624 583322 </span>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <span> hasanuzzaman201601@gmail.com </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
