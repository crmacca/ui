import { useNavigate, useRouteError } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


import { Typewriter } from "react-simple-typewriter"

const ErrorPage = ({darkMode, toggleDark}) => {
    const errorData = useRouteError()
    const navigate = useNavigate()
    
    return (
        <div className="">
            <Navbar darkMode={darkMode} toggleDark={toggleDark}/>
            <main className="pt-10 max-w-5xl m-auto px-5">
                <h1 className="font-source-code text-5xl font-semibold text-start">{errorData.status}</h1>
                <h1 className="font-source-code text-xl text-start">
                    <Typewriter
                        words={[`@root: Error occured at interface:/${window.location.pathname}, try again later.`]}
                        loop={1}
                        cursor
                        cursorStyle='_'
                        typeSpeed={20}
                        delaySpeed={1000}
                    />
                </h1>
                <button onClick={() => navigate('/')} className="mt-5 font-inter bg-green-500 border border-gray-400 border-opacity-40 shadow-xl text-white px-2 py-1 rounded-lg flex items-center gap-1 duration-100 hover:brightness-95">
                    <FontAwesomeIcon icon={icon({name: 'home'})} />
                    Back to home page
                </button>
            </main>
            <Footer />
        </div>
    )
}

export default ErrorPage