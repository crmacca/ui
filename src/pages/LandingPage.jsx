import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const featuredSites = [
    {
        name: 'Chris\' Portfolio',
        img: 'thumbnails/chrispf.png',
        location: 'https://cmcdev.net',
        textColor: '#fff'
    },
    {
        name: 'AI Image Generator',
        img: 'thumbnails/aiimage.png',
        location: 'https://ai-image-generator-ten-lime.vercel.app/',
        textColor: '#fff'
    }
]

const LandingPage = ({darkMode, toggleDark}) => {
    return (
        <div className="">
            <Navbar darkMode={darkMode} toggleDark={toggleDark}/>
            <main className="max-w-5xl mx-auto pt-10 px-2">
                    <h1 className="font-inter text-start font-semibold my-4 text-2xl flex items-center gap-2">
                        <FontAwesomeIcon className='text-xl my-auto' icon={icon({name: 'star'})} />
                        Featured Sites
                    </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 gap-y-3">
                    {featuredSites.map((site, index) => (
                        <button onClick={() => window.open(site.location)} key={index} className="rounded-lg border border-gray-400 border-opacity-50 relative shadow-lg drop-shadow-2xl w-full h-48 hover:brightness-75 duration-100 overflow-hidden">
                            <img src={site.img} className="inset-0 absolute z-0 object-cover object-center"/>
                            <h1 
                            style={{
                                color: site.textColor
                            }}
                            className="text-start absolute bottom-0 z-20 m-3 font-semibold text-2xl"
                            >
                                {site.name}
                            </h1>
                        </button>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage