import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import cpp from './Icons/c++.svg';
import canva from './Icons/canva.svg';
import cssIcon from './Icons/css.svg';
import figma from './Icons/figma.svg';
import github from './Icons/github.svg';
import gsapIcon from './Icons/gsap.svg';
import htmlIcon from './Icons/html.svg';
import java from './Icons/java.svg';
import jsIcon from './Icons/js.svg';
import materialuiIcon from './Icons/materialui.svg';
import mongodbIcon from './Icons/mongodb.svg';
import mysqlIcon from './Icons/mysql.svg';
import nodejsIcon from './Icons/nodejs.svg';
import postmanIcon from './Icons/postman.svg';
import python from './Icons/python.svg';
import reactIcon from './Icons/reactjs.svg';
import reactqueryIcon from './Icons/reactquery.svg';
import scssIcon from './Icons/sass.svg';
import tailwindIcon from './Icons/tailwindcss.svg';
import vscode from './Icons/vscode.svg';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
    const skillsRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                // ✅ Desktop and tablet view
                "(min-width: 769px)": () => {
                    const sections = [
                        '.frontend-skills',
                        '.backend-skills',
                        '.programming-skills',
                        '.tools'
                    ];

                    gsap.fromTo(
                        sections,
                        {
                            opacity: 0,
                            y: 60,
                            scale: 0.95
                        },
                        {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            stagger: 0.3,
                            scrollTrigger: {
                                trigger: '.skills-container',
                                start: 'top 50%',
                                end: 'bottom 10%',
                                toggleActions: 'play reverse play reverse',
                                markers: true,
                            }
                        }
                    );
                }
                ,
                // ✅ Mobile view
                "(max-width: 768px)": () => {
                    const categories = [
                        '.frontend-skills-icons img',
                        '.backend-skills-icons img',
                        '.programming-skills-icons img',
                        '.tools-icons img'
                    ];

                    categories.forEach((selector) => {
                        gsap.fromTo(selector,
                            { opacity: 0, scale: 0.8, y: 50 },
                            {
                                opacity: 1,
                                scale: 1,
                                y: 0,
                                duration: 0.4,
                                stagger: 0.05,
                                ease: 'power2.out',
                                scrollTrigger: {
                                    trigger: selector,
                                    start: 'top 80%',
                                    end: 'bottom 10%',
                                    toggleActions: 'play reverse play reverse',
                                    markers: true
                                }
                            }
                        );
                    });
                }

            });
        }, skillsRef);

        return () => ctx.revert();
    }, []);


    return (
        <div className="skills-outer-container" ref={skillsRef}>
            <div className='skill-heading'>Skills</div>
            <div className='skills-container'>
                <div className="frontend-skills">
                    <div>Frontend Technologies</div>
                    <div className='frontend-skills-icons'>
                        <img src={htmlIcon} alt="HTML" />
                        <img src={cssIcon} alt="CSS" />
                        <img src={jsIcon} alt="JavaScript" />
                        <img src={reactIcon} alt="React" />
                        <img src={reactqueryIcon} alt="React Query" />
                        <img src={gsapIcon} alt="GSAP" />
                        <img src={materialuiIcon} alt="Material UI" />
                        <img src={tailwindIcon} alt="Tailwind" />
                        <img src={scssIcon} alt="SCSS" />
                    </div>
                </div>
                <div className="backend-skills">
                    <div>Backend Technologies</div>
                    <div className='backend-skills-icons'>
                        <img src={nodejsIcon} alt="Node.js" />
                        <img src={postmanIcon} alt="Postman" />
                        <img src={mongodbIcon} alt="MongoDB" />
                        <img src={mysqlIcon} alt="MySQL" />
                    </div>
                </div>
                <div className="programming-skills">
                    <div>Programming Languages</div>
                    <div className='programming-skills-icons'>
                        <img src={cpp} alt="C++" />
                        <img src={java} alt="Java" />
                        <img src={python} alt="Python" />
                    </div>
                </div>
                <div className="tools">
                    <div>Tools</div>
                    <div className='tools-icons'>
                        <img src={vscode} alt="VS Code" />
                        <img src={github} alt="GitHub" />
                        <img src={figma} alt="Figma" />
                        <img src={canva} alt="Canva" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
