import { FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="contact container">
        <div className="contact_left">
           <h3>MAAB Academy bilan BI kelajagingizni oching! Hozir roʻyxatdan oʻting!</h3>
           <p>Kirish imtihonimizni topshiring va Grant yutib olish imkoniyatiga ega bo'ling</p>
        </div>
        <div className="contact_right">
              <h4>Kursga yozilish</h4>
              <form action="">
                <div className="form">
                    Ismingiz 
                    <input type="text" placeholder="Abbos"/>
                </div>
                <div className="form">
                    Telefon raqamingiz
                    <input type="text" placeholder="+998"/>
                </div>
                <div className="form">
                    Ingliz tili darajangiz
                    <select name="" id="">
                        <option value="">Darajangiz</option>
                    </select>
                </div>
                <div className="form">
                    Mantiqiy bilim darajangiz
                    <select name="" id="">
                        <option value="">Bilim darajangiz</option>
                    </select>
                </div>
              </form>
              <div className="form_btn">
                <div className="form_btn_left">
                <input type="checkbox" />
                <p> Arizani topshirish orqali siz shaxsiy ma'lumotlaringizni “Maxfiylik siyosati”ga muvofiq qayta ishlashga rozilik bildirasiz</p>
                </div>
                <button>Arizani jo’natish <FaArrowRight /></button>
              </div>
        </div>
    </div>
  )
}

export default Contact