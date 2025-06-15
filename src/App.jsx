import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Preloader from './Components/Preloader/Preloader.jsx';
import About from './Pages/About_Me/About_Me.jsx';
import Contact_Us from './Pages/Contact_Us/Contact_Us.jsx';
import Experience from './Pages/Experience/Experience.jsx';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';
import Services from './Pages/Services/Services.jsx';
import Skills from './Pages/Skills/Skills.jsx';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'auto';
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && <Preloader />}
            {!loading && (
                <>
                    <Navbar />
                    <div id="home"><LandingPage /></div>
                    <div id="services"><Services /></div>
                    <div id="about"><About /></div>
                    <div id="experience"><Experience /></div>
                    <div id="skills"><Skills /></div>
                    <div id="contact"><Contact_Us /></div>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
