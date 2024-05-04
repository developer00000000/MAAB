import About from "../components/about/About"
import Contact from "../components/contact/Contact"
import Grant from "../components/grant/Grant"
import Hero from "../components/hero/Hero"
import Question from "../components/question/Question"


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Grant/>
      <Question/>
      <Contact/>
    </div>
  )
}

export default Home