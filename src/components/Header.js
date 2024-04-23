import "./Header.css"

const Header = () => {
  return <div>
    <div className="header">
      <div>
        {/* <img alt="logo" src="../../assets/profile.png" /> */}
        <p>pooja</p>
      </div>
      <div>
        <div>About</div>
        <div>Experience</div>
        <div>Projects</div>
        <div>Contact</div>
        <div className="dark-theme">
          <div id="theme-toggle" className="theme-toggle">
            <i className="fas fa-sun"></i> 
          </div>
        </div>
      </div>
    </div>



  </div>

}

export default Header;