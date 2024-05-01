import "./Navbar.css";
import { useState, useEffect } from "react";
import img3 from '../Images/image3.png';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

/* 
To track the window dimensions:
*/
function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <div>

  {/* 
Desktop Navigation: 
*/}
      {screenSize.width > 750 && (
        <div className="navBarContainer">
          <div>
              <img src={img3} alt="Logo" className="logo-main" />
          </div>
          <div className="topnav">
            <a href="#Home">SERVICES</a>
            <a href="#news">ABOUT US</a>
            <a href="#projects">CONTACT US</a>
            <a href="#careers">CAREERS</a>
          </div>
        </div>
      )}

{/*
Mobile Navigation: 
*/}
      {screenSize.width <= 750 && (
        <div>
          <div className="navBarContainer">
            <div>
              <img src={img3} alt="Logo" className="logo-mobile" />
            </div>
            <div className="topnav">
              <div className="topnav" onClick={handleMenuOpen}>
                <a>
                  <MenuIcon style={{ fontSize: "200%" }} />
                </a>
              </div>
            </div>
          </div>

          {menuOpen ? (
            <div>
              <div className="popupContainer">
                <div className="dialogStyle">
                  <div className="boxStyle">
                    <div className="mainContent">
                      <div className="popupHeader">
                        <button
                          className="closeButton"
                          onClick={handleMenuOpen}
                        >
                          <a>
                            <CloseIcon
                              style={{ fontSize: "250%", color: "#000000" }}
                            />
                          </a>
                        </button>
                      </div>
                    </div>
                    <div className="verticalNav">
                    <a href="#Home">SERVICES</a>
                    <a href="#news">ABOUT US</a>
                    <a href="#projects">CONTACT US</a>
                    <a href="#careers">CAREERS</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

export default App;