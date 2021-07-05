import { useState } from "react";

import "./nav.css";
import "./navMediaquery.css";
import { FiSearch } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { RiArrowDropDownFill } from "react-icons/ri";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Nav() {
   const [pageIsScrolled, setpageIsScrolled] = useState(false);
   const [browseClicked, setbrowseClicked] = useState(false);
   const [profileclicked, setprofileclicked] = useState(false);

   window.onscroll = () => {
      setpageIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
   };

   return (
      <nav className={`navbar ${pageIsScrolled ? " navbar-color" : ""}`}>
         <div className="navbar-container">
            <div className="left-side">
               <div className="logo-div">
                  <img
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                     alt="netflix-logo"
                  />
               </div>
               <div
                  className="browse"
                  onClick={() => {
                     setbrowseClicked((browseClicked) => !browseClicked);
                  }}
               >
                  <p>Browse</p>
                  {browseClicked ? (
                     <MdKeyboardArrowDown className="drop-icon" />
                  ) : (
                     <MdKeyboardArrowUp className="drop-icon" />
                  )}
               </div>
               <div className="menu-div">
                  <ul>
                     <li>Home</li>
                     <li>Series</li>
                     <li>Films</li>
                     <li>New & Popular</li>
                     <li>My List</li>
                  </ul>
               </div>
            </div>
            <div className="right-side">
               <div className="profile-div">
                  <FiSearch />
                  <p>Children</p>
                  <RiNotification2Line />
                  <div
                     className="profile-pic-div"
                     onClick={() =>
                        setprofileclicked(
                           (setprofileclicked) => !setprofileclicked
                        )
                     }
                  >
                     <img
                        className="profile-pic"
                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        alt="Profile-pic"
                     />
                     <RiArrowDropDownFill />
                  </div>
                  {profileclicked && (
                     <div className="settings-logout-div">
                        <p onClick={() => setprofileclicked(false)}>Settings</p>
                        <p onClick={() => setprofileclicked(false)}>Log out</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Nav;
