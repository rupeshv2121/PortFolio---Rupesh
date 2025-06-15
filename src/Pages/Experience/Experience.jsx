import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import './Experience.css';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const experienceRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // ScrollTrigger.matchMedia({
            // "(min-width: 769px)": function () {
            // Hacktober Fest Card
            gsap.fromTo('.experience-card-1',
                { y: -100, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.experience-inner-container',
                        start: 'top 30%',
                        end: 'bottom 90%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );

            // Reto India Card
            gsap.fromTo('.experience-card-2',
                { y: -100, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.experience-card-2',
                        start: 'top 70%',
                        end: 'bottom 10%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );

            // GSsoc Card
            gsap.fromTo('.experience-card-3',
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.experience-card-3',
                        start: 'top 50%',
                        end: 'bottom 10%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );

            // SWOC Card
            gsap.fromTo('.experience-card-4',
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.experience-card-4',
                        start: 'top 70%',
                        end: 'bottom 30%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );

            // IEEE Card
            gsap.fromTo('.experience-card-5',
                { y: 80, opacity: 0 },
                {
                    y: 0, opacity: 1,
                    delay: 0.5,
                    duration: 1.5,
                    ease: 'power3.out',
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.experience-card-5',
                        start: 'top 90%',
                        end: 'bottom 40%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );
        }
            // });

            , experienceRef)
        return () => ctx.revert();
    }, [])
    return (
        <>
            <div className="experience-outer-container" ref={experienceRef}>
                <div className="experience-heading">Experience</div>
                <div className="experience-inner-container">
                    <div className="experience-left-container">
                        <div className='experience-card experience-card-1'>
                            <div className='experience-description'>
                                <div>Hacktober fest 2024</div>
                                <div>Contributor</div>
                            </div>
                            <div className='experience-timeline'>Oct 2024 ~ Nov 2024</div>
                        </div>

                        <div className='experience-card experience-card-2 '>
                            <div className='experience-description'>
                                <div>Reto India</div>
                                <div>Web Developer</div>
                            </div>
                            <div className='experience-timeline'>Jan 2025 ~ Mar 2025</div>
                        </div>
                    </div>
                    <div className="experience-divider">
                        <div className='circle-1'></div>
                        <div className='circle-2'></div>
                        <div className='circle-3'></div>
                        <div className='circle-4'></div>
                        <div className='circle-5'></div>
                    </div>
                    <div className="experience-right-container">
                        <div className='experience-card experience-card-3'>
                            <div className='experience-description'>
                                <div>GirlScript Summer of <br />Code ext 2024 </div>
                                <div>Contributor</div>
                            </div>
                            <div className='experience-timeline'>Oct 2024 ~ Nov 2024</div>
                        </div>

                        <div className='experience-card experience-card-4'>
                            <div className='experience-description'>
                                <div>Social Winter of Code</div>
                                <div>Contributor</div>
                            </div>
                            <div className='experience-timeline'>Jan 2025 ~ Mar 2025</div>
                        </div>

                        <div className='experience-card experience-card-5'>
                            <div className='experience-description'>
                                <div>IEEE Student Branch</div>
                                <div>Web Developer</div>
                            </div>
                            <div className='experience-timeline'>Jul 2024 ~ May 2025</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}