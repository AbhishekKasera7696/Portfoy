import { useState } from "react";
import "./header.css";
import Web from "./web/index.js"
import Mobile from "./mobile/index.js"

function Header() {

  const[isOpen,setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">𝓹𝓸𝓻𝓽𝓯ö𝔂</div>
      <div className="menu">
        <div className="web_menu">
          <Web />
        </div>
        <div className="mobile_menu">
          <div onClick={() => setIsOpen(!isOpen)}>
             <i class="material-icons">menu</i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
