import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import discordIcon from './Discord.svg';
import './Footer.css';


function Footer() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <>        <div className="footer-outer-container">
            <div className="footer-links">
                <a onClick={() => scrollToSection("home")}>Home <span className="home"></span></a>
                <a onClick={() => scrollToSection("services")}>Services <span className="services"></span></a>
                <a onClick={() => scrollToSection("about")}>About <span className="about"></span></a>
                <a onClick={() => scrollToSection("experience")}>Experience <span className="experience"></span></a>
                <a onClick={() => scrollToSection("skills")}>Skills <span className="skills"></span></a>
                <a onClick={() => scrollToSection("contact")}>Contact <span className="contact"></span></a>
            </div>

            <div className="footer-icons">
                <a href=""><GitHubIcon className='github-icon' /></a>
                <a href=""><LinkedInIcon className='linkedIn-icon' /></a>
                <a href=""><img src={discordIcon} alt="" className='discord-icon' /></a>
            </div>
            <div className='personal-info'>
                <a href="" className='email-link'>
                    <EmailOutlinedIcon />
                    <div>rupeshvarshney7@gmail.com</div>
                </a>

                <div className='phone-number'>
                    <LocalPhoneIcon />
                    <div>+91 9456467877</div>
                </div>
            </div>
            <hr />
        </div>
            <div className="made-by">Designed by : 🧡Rupesh</div>
        </>

    )
}

export default Footer;