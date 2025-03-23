import { useEffect, useRef } from "react";
import "./navbar.css";
import { logout } from "../../../firebase";

function Navbar() {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src="/netflix.svg" alt="" width={30} />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li> My Lists</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src="/search.svg" alt="" width={30} />
        <p>Children</p>
        <img src="/bell.svg" alt="" width={30} />
        <img src="/carts.svg" alt="" width={30} />
        <div className={`profile`}>
          <img className="icons" src="/profile.jpg" alt="" width={30} />
          <div className="dropdown">
            <span onClick={()=>{logout()}}>Sign out of netfix</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
