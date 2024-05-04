import img from '../../images/footer.png'
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
        <div className="footer container">
          <div className="footer_left">
            <img src={img} alt="f" />
            <p>+998 97 783 90 45</p>
            <div className="footer_left_media">
             <FaLinkedin />
             <FaInstagram />
             <FaTelegram />
             <CiYoutube />
             <FaFacebook />
          </div>
          </div>
          <ul>
            <li className='list_bold'>Kurslarimiz</li>
            <li>Data analytics</li>
            <li>Data engineer</li>
            <li>Cloud data engineering</li>
          </ul>
          <ul>
            <li className='list_bold'>Menyular</li>
            <li>Grantlar</li>
            <li>Sertifikatlarimiz</li>
            <li>Ustozlar</li>
          </ul>
          <ul>
            <li className='list_bold'>Biz bilan bog’laning</li>
            <li><CiLocationOn className='big'/>Tashkent, Mirabad district, Oybeka, 18/1 ATRIUM Business Center on the 5th floor-1.</li>
            <li><MdOutlineEmail />info@maab.uz</li>
            <li><FiPhone />+998 97 783 90 45</li>
          </ul>
        </div>
        <div className="footer_end container">
          <span>© 2023 MAAB INNOVATION</span>
          <div>
            <p>Dizaynerlar:Mazmoon</p>
            <p>Dasturchilar:UniFS</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer