import { getDatabase, ref, set } from 'firebase/database';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef, useState } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { app } from '../../Firebase';
import contactLogo from './contact.svg';
import './Contact_us.css';

gsap.registerPlugin(ScrollTrigger);

function Contact_Us() {
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile_no: '',
        email: '',
        service_of_interest: '',
        query: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        const now = new Date();
        const timestamp = now.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).replace(',', '').replace(/\//g, '-');

        set(ref(db, 'contact/' + now.getTime()), {
            ...formData,
            submitted_at: timestamp
        })
            .then(() => {
                toast('🦄 Message Sent Successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Zoom,
                })
                setFormData({
                    name: '',
                    mobile_no: '',
                    email: '',
                    service_of_interest: '',
                    query: ''
                });
            })
            .catch((error) => {
                toast.error("Submission Failed : ", error)
            });
    };

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo('.contact-left-container',
                { y: -100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.5,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.25,

                    scrollTrigger: {
                        trigger: '.contact-left-container',
                        start: 'top 40%',
                        // end: 'bottom 40%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );

            gsap.fromTo('.contact-right-container',
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    delay: 0.8,
                    duration: 1.5,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.contact-right-container',
                        start: 'top 50%',
                        // end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse',
                        // markers: true
                    }
                }
            );
        }, contactRef);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Zoom}
            />
            <div className="contact-outer-container" ref={contactRef}>
                <div className="contact-heading">Contact me</div>
                <div className="contact-inner-container">
                    <form className="contact-left-container" onSubmit={handleOnSubmit} noValidate>
                        <input type="text" placeholder="name" name='name' value={formData.name} onChange={handleChange} required />
                        <input type="number" placeholder="mobile_no" name='mobile_no' value={formData.mobile_no} onChange={handleChange} required />
                        <input type="email" placeholder="email" name='email' value={formData.email} onChange={handleChange} required />
                        <input type="text" placeholder="service of interest" name='service_of_interest' value={formData.service_of_interest} onChange={handleChange} required />
                        <input type="text" placeholder="query" name='query' value={formData.query} onChange={handleChange} required />
                        <button>Submit</button>
                    </form>
                    <div className="contact-right-container">
                        <img src={contactLogo} alt="Contact" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact_Us;
