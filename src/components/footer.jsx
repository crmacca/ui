import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()

    return (
        <footer className="min-w-screen">
            <div className="absolute bottom-0 min-w-full py-3">
                <button onClick={() => navigate('/')} className="m-auto">
                    <img src='logo-large.png' alt='logo' className="h-10" />
                </button>
            </div>
        </footer>
    )
}

export default Footer