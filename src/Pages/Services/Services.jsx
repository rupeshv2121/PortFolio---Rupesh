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

            const isMobile = window.innerWidth <= 525;

            // ScrollTrigger configs for desktop
            const desktopConfigs = [
                { start: 'top 80%', end: 'bottom 25%' }, // Frontend
                { start: 'top 75%', end: 'bottom 28%' }, // Backend
                { start: 'top 70%', end: 'bottom 32%' }, // UI/UX
            ];

            // ScrollTrigger configs for mobile
            const mobileConfigs = [
                { start: 'top 90%', end: 'bottom 10%' },
                { start: 'top 90%', end: 'bottom 15%' },
                { start: 'top 85%', end: 'bottom 20%' },
            ];

            const activeConfigs = isMobile ? mobileConfigs : desktopConfigs;

            items.forEach((item, i) => {
                const { start, end } = activeConfigs[i] || {
                    start: 'top 70%',
                    end: 'top 20%',
                };

                gsap.fromTo(
                    item,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: item,
                            start,
                            end,
                            toggleActions: 'play reverse play reverse',
                            // markers: true, // Remove in production
                        },
                    }
                );
            });
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
