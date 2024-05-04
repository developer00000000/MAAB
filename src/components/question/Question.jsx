import { FaChevronDown } from "react-icons/fa";

const Question = () => {
  return (
    <div className="question">
       <h3>Ko‘p so‘ralgan savollar</h3>
       <p className="question_text">Прежде чем брать студентов на наши курсы для начинающих, мы проверяем их навыки английского языка, математики и решения задач. </p>
        <div className="question_box container">
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Bu sohada mening bilimim va tajriba yo’q. Darslarni o’zlashtirishda  menda qiyinchiliklar bo’lmaydimi?</h4>
                <FaChevronDown />
                </div>
                {/* <p>Raqamli ma'lumotlar hajmi o'sishda davom etar ekan, qaror qabul qilish jarayonlari murakkablashmoqda. Aynan shu yerda biznes tahlili (business intelligence) texnologiyalari, ma'lumotlarni qidirish, bashoratli tahlillar va boshqa vositalar juda foydali bo'lishi mumkin.</p> */}
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Dasturlash foundation kursini boshlashdan oldin nimalarni bilish kerak?</h4>
                <FaChevronDown />
                </div>
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Dasturlash foundation kursini bitirib o’quvchi qanday ko’nikmalarga ega bo’lishi kerak?</h4>
                <FaChevronDown />
                </div>
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Kurs tugatkandan so’ng sertifikat beriladimi?</h4>
                <FaChevronDown />
                </div>
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Kursdan foyda olmasam, pulim qaytarib beriladimi?</h4>
                <FaChevronDown />
                </div>
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>kursni sotib olsam, undan doim foydalana olamanmi?</h4>
                <FaChevronDown />
                </div>
            </div>
            <div className="question_box_blog">
                <div  className="question_box_blog_title">
                <h4>Kursda o’qish ucun kompyuterim bo’lishi kerakmi?</h4>
                <FaChevronDown />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Question