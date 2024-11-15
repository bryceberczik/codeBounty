import "../css/header.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-left">
          <h1>codeBounty</h1>
        </div>
        <div className="header-center">
          <h1>Home</h1>
          <h1>Explore</h1>
          <h1>Find work</h1>
          <h1>Post a Job</h1>
          <h1>About</h1>
        </div>
        <div className="header-right">
          <div className="signup-btn">
            <h1>Sign up</h1>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
