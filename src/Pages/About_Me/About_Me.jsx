import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import './About_Me.css';
import about from './about.svg';
import download from './download.svg';

gsap.registerPlugin(ScrollTrigger);

function About_Me() {
    const aboutRef = useRef(null);

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/Rupesh_CV.pdf';
        link.download = 'Rupesh_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the whole about-inner-container together
            gsap.fromTo('.about-inner-container',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.about-inner-container',
                        start: 'top 70%',
                        end: 'bottom 10%',
                        toggleActions: 'play none none reverse',
                        // once: true
                    }
                }
            );

            // Animate skills container items with stagger
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.about-skills-container',
                    start: 'top 70%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                    // once: true
                }
            }).fromTo('.about-skills',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    stagger: 0.3
                }
            );
        }, aboutRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        { label: 'Frontend Skills', percentage: 90 },
        { label: 'Backend Skills', percentage: 80 },
        { label: 'Designing Skills', percentage: 90 },
    ];

    return (
        <div className="about-outer-container" ref={aboutRef}>
            <div className="about-heading">About Me</div>
            <div className='about-inner-container'>
                <div className="about-left-container">
                    My name is Rupesh Varshney. Currently I am pursuing my Bachelor’s in Technology in Computer Engineering from Aligarh Muslim University.
                    <br /><br />
                    I am MERN-Stack Web Developer who enjoys building web-apps. I also have interest in Machine Learning and Artificial Intelligence.
                    <br />
                    <button onClick={handleDownloadCV}>
                        <img src={download} alt="download" />Download CV
                    </button>
                </div>
                <div className="about-right-container">
                    <img src={about} alt="about" />
                </div>
            </div>

            <div className='about-skills-container'>
                {skills.map((skill, index) => {
                    const degree = (skill.percentage / 100) * 360;
                    return (
                        <div className='about-skills' key={index}>
                            <div className='about-circle'>
                                <div
                                    className='circle1'
                                    style={{ background: `conic-gradient(#FC7013 0deg ${degree}deg, transparent ${degree}deg 360deg)` }}
                                >
                                    <div className='circle2'></div>
                                    <div className='percentage-text'>{skill.percentage}%</div>
                                </div>
                            </div>
                            <div className="skill-label">{skill.label}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default About_Me;
