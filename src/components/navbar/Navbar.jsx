import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logo from '../../images/image 1.svg'
import { LuPhone } from "react-icons/lu";
const Navbar = () => {
  return (
    <header>
      <div className="social container">
        <span></span>
        <div className="social_right">
          <div className="social_right_blog">
             <FaTelegram />
             <FaInstagram />
             <FaLinkedin />
             <FaFacebook />
          </div>
          <button>
            uzbek <FaChevronDown className="social_right_blog"/>
          </button>
        </div>
      </div>
      <nav className="container">
        <img src={logo} alt="" />
        <div className="nav_contact">
           <span>+998 97 783 90 45</span>
           <button>Aloqada bo’ling <LuPhone /></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar