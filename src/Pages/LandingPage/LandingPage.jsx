import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import gsap from 'gsap';
import { useEffect } from 'react';
import logo from './landing-photo.svg';
import './LandingPage.css';


function LandingPage() {
    const handleHireMe = () => {
        window.location.href = "mailto:rupeshvarshney7@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Rupesh%2C%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project.";
    };

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Rupesh_CV.pdf';
        link.download = 'Rupesh_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo('.intro', { opacity: 0, scale: 0.4 }, {
            opacity: 1,
            scale: 1,
            delay: 3,
            duration: 1,
            ease: "power2.inOut"
        }),
            tl.fromTo('.outer-container .role',
                { opacity: 0, scale: 0.5 }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            }),
            tl.fromTo('.outer-container .right-container img',
                { opacity: 0, scale: 0.5 }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
        tl.fromTo('.logos a', { opacity: 0, y: -20 }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.inOut'
        }),
            tl.fromTo('.landing-buttons .hire-me-button', { opacity: 0, x: -50 }, {
                opacity: 1,
                x: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power2.inOut'
            })

        tl.fromTo('.landing-buttons .download-cv-button', { opacity: 0, x: 200 }, {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.inOut'
        }),
            tl.fromTo('.experience-container',
                { opacity: 0, scale: 0.5 }, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power2.inOut'
            })
    }, []);

    return (
        <>
            <div className="outer-container">
                <div className="left-container">
                    <div className='intro'>
                        <div>Hello, I am Rupesh Varshney</div>
                        <div className='role'>MERN~STACK Developer</div>
                    </div>
                    <div className='logos'>
                        <a href="https://github.com/rupeshv2121"><GitHubIcon /></a>
                        <a href="https://www.linkedin.com/in/rupeshvarshney/"><LinkedInIcon /></a>
                    </div>
                    <div className='landing-buttons'>
                        <button className='hire-me-button' onClick={handleHireMe}>Hire me</button>
                        <button className='download-cv-button' onClick={handleDownloadCV}>Download CV</button>
                    </div>
                    <div className='experience-container'>
                        <div className='experience'>
                            <div>1+ year<br />Experience</div>
                        </div>
                        <div className='projects'>
                            <div>5+<br />Projects</div>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <img src={logo} />
                </div>
            </div>
        </>
    )
}

export default LandingPage;