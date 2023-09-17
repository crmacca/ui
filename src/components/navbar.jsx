import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const Navbar = ({darkMode, toggleDark}) => {
    const navigate = useNavigate()

    return (
        <header className="mx-auto max-w-7xl">
            <div className="min-w-full py-2 border-b-2 border-gray-200 flex justify-center items-center">
                <button onClick={() => navigate('/')} className="">
                    <img src='logo.png' alt='logo' className="h-16" />
                </button>
                <button className="text-2xl ml-auto" onClick={toggleDark}>
                    {
                        darkMode ? 
                        <FontAwesomeIcon icon={icon({name: 'sun'})} />
                        :
                        <FontAwesomeIcon icon={icon({name: 'moon'})} />
                    }
                </button>
            </div>
        </header>
    )
}

export default Navbar