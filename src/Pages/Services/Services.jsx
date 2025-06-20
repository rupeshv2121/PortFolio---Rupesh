import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
import backend from './backend.svg';
import frontend from './frontend.svg';
import './Services.css';
import ui_ux from './ui_ux.svg';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    const servicesRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const items = gsap.utils.toArray('.services > div');

            gsap.fromTo(
                items,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.25,
                    scrollTrigger: {
                        trigger: '.services', // Trigger when the container comes into view
                        start: 'top 70%',
                        end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true, // Enable for debug
                    },
                }
            );
        }, servicesRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="outer-container-services" ref={servicesRef}>
            <div className="services-heading">Services</div>
            <div className="services">
                <div className="frontend">
                    <img src={frontend} alt="Frontend" />
                    <div>Frontend Development</div>
                </div>
                <div className="backend">
                    <img src={backend} alt="Backend" />
                    <div>Backend Development</div>
                </div>
                <div className="ui_ux">
                    <img src={ui_ux} alt="UI/UX" />
                    <div>UI/UX Designing</div>
                </div>
            </div>
        </div>
    );
}

export default Services;
