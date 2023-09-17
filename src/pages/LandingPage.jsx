import Footer from "../components/footer"
import Navbar from "../components/navbar"

const LandingPage = ({darkMode, toggleDark}) => {
    return (
        <div className="">
            <Navbar darkMode={darkMode} toggleDark={toggleDark}/>
            
            <Footer />
        </div>
    )
}

export default LandingPage