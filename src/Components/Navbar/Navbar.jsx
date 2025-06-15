import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    const navLinksRef = useRef(null);
    const hemBurgerRef = useRef(null);
    const logoRef = useRef(null);

    const handleNavbar = () => {
        setIsNavbarActive((prev) => !prev);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            logoRef.current,
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                delay: 0.5,
                ease: 'power2.out'
            }
        );

        tl.fromTo(
            navLinksRef.current.querySelectorAll('a'),
            { y: -20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.25,
                ease: 'power2.out'
            },
        );

    }, [isNavbarActive]);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isNavbarActive);
    }, [isNavbarActive]);

    useEffect(() => {
        setTimeout(() => {
            document.body.classList.add("no-scroll");
        }, 1000);
    }, []);

    return (
        <div className="container">
            <div className="logo" ref={logoRef}>Logo</div>
            <div
                className={`nav-links${isNavbarActive ? ' active' : ''}`}
                ref={navLinksRef}
            >
                <a onClick={() => scrollToSection("home")}>Home <span className="home"></span></a>
                <a onClick={() => scrollToSection("services")}>Services <span className="services"></span></a>
                <a onClick={() => scrollToSection("about")}>About <span className="about"></span></a>
                <a onClick={() => scrollToSection("experience")}>Experience <span className="experience"></span></a>
                <a onClick={() => scrollToSection("skills")}>Skills <span className="skills"></span></a>
                <a onClick={() => scrollToSection("contact")}>Contact <span className="contact"></span></a>
            </div>

            <div
                className={`hemBurger${isNavbarActive ? ' active' : ''}`}
                onClick={handleNavbar}
                ref={hemBurgerRef}
            >
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </div>


    );
}

export default Navbar;