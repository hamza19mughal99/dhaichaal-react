import React, { useRef } from 'react'
import Slider from "react-slick";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


// --------------------------images-----------------------
import mainLogo from "../../images/main_logo.png";
import Producer from "../../images/producer.jpg";
import AsstProducer from "../../images/asst_prod-modified.png";
import Director from "../../images/direc.jpg";
import Writer from "../../images/writ.jpg"

// -----------------------------Cast--------------------------
import cast1 from "../../images/pro1.png"
import cast2 from "../../images/shanmoon.png"
import cast3 from "../../images/ayesha_omer.png"
import cast4 from "../../images/humaiyuh.png"
import cast5 from "../../images/adnan.png"
import cast6 from "../../images/saleem.png"
import cast7 from "../../images/rashidNaz.png"
import cast8 from "../../images/taqi.png"
import dummy from "../../images/dummy.png";
import crew1 from "../../images/owais.png";
import media1 from "../../images/media1.jpg"
import media2 from "../../images/media3.png"
// -------------------
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaArrowDown } from "react-icons/fa";

const Home = () => {
    AOS.init();

    const trailerSection = useRef(null)
    const castSection = useRef(null)
    const crewSection = useRef(null)
    const mediaSection = useRef(null)
    const getStarted = useRef(null)

    const gotoTrailerSection = () => {
        window.scrollTo({
            top: trailerSection.current.offsetTop,
            behavior: 'smooth'
        })
    }
    const gotoCastSection = () => {
        window.scrollTo({
            top: castSection.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const gotoCrewSection = () => {
        window.scrollTo({
            top: crewSection.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const gotoMediaSection = () => {
        window.scrollTo({
            top: mediaSection.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const goToGetStarted = () => {
        window.scrollTo({
            top: getStarted.current.offsetTop,
            behavior: 'smooth'
        })
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const castDetail = [
        {
            img: cast1,
            name: 'DR. IRFAN ASHRAF'
        },
        {
            img: cast2,
            name: 'SHANMOON ABBASSI'
        },
        {
            img: cast3,
            name: 'AYESHA OMAR'
        },
        {
            img: cast6,
            name: 'SALEEM MERAAJ'
        },
        {
            img: cast5,
            name: 'ADNAN SHAH TIPU'
        },
        {
            img: cast4,
            name: 'HUMAYUH ASHRAF'
        },
        {
            img: cast7,
            name: 'RASHID NAZ'
        },
        {
            img: cast8,
            name: 'TAQI AHMED'
        },
        {
            img: dummy,
            name: 'FARAZ MARRI'
        },
        {
            img: dummy,
            name: 'PAKIZA KHAN'
        },
        {
            img: dummy,
            name: 'ANYA HASSAN'
        },
        {
            img: dummy,
            name: 'AREEJ CHAUDHRY'
        },
        {
            img: dummy,
            name: 'ASIM SHAH'
        },
        {
            img: dummy,
            name: 'MEHBOOB SULTAN'
        },
        {
            img: dummy,
            name: 'IRFAN MOTI WALA'
        },

    ]

    return (
        <>
            <div className='main_section'>
                <button onClick={goToGetStarted} >Get Started <FaArrowDown /> </button>
            </div>
            <div className='second_main' ref={getStarted}>
                <Navbar expand="lg" className="Navbar-header">
                    <Container>
                        <NavLink to="/"><img data-aos="fade-right" alt='main' data-aos-duration="1000" src={mainLogo} /></NavLink>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <div className="navbar-nav" data-aos="fade-left" data-aos-duration="1000">
                                    <NavLink className="nav_link" to={'/'}>HOME </NavLink>
                                    <NavLink onClick={gotoTrailerSection} className="nav_link" to={'/'}>TRAILER </NavLink>
                                    <NavLink onClick={gotoCastSection} className="nav_link" to={'/'}>CAST</NavLink>
                                    <NavLink onClick={gotoCrewSection} className="nav_link" to={'/'}>CREW</NavLink>
                                    <NavLink onClick={gotoMediaSection} className="nav_link" to={'/'}>MEDIA PARTNERS</NavLink>
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <div className='trailer_section' ref={trailerSection}>
                    <h5 className='heading'>TRAI<span>LER</span></h5>
                    <iframe title='trailer' style={{ width: '100%', height: "550px" }} src="https://www.youtube.com/embed/1yOmiawrCKU">
                    </iframe>
                </div>

                <div className='producer'>
                    <h1 className='heading'>PROD<span>UCER</span> </h1>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Producer} alt="producer" data-aos="fade-left"  data-aos-duration="1000"/>
                            </div>
                            <div className='col-md-6 producer_right' data-aos="fade-right"  data-aos-duration="1000">
                                <h2>Dr. Irfan Ashraf</h2>
                                <p>Dr Irfan Ashraf is the Producer of the Film Dhai Chaal.
                                    He is A TV Anchor at National Media in Pakistan & writing Articles
                                    on Geo Political Strategies of South Asia for international Newspapers.
                                    Dr Irfan is Currently Director General of Kashmir Cultural Academy.
                                    His expertise on Kashmir & Balochistan are acknowledged by state authorities at Top level.
                                    He has a depth insight about  Balochistan & Kashmir .</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='producer'>
                    <h1 className='heading'>DIREC<span>TOR</span> </h1>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 producer_right' data-aos="fade-right"  data-aos-duration="1000">
                                <h2>Taimoor Sherazi</h2>
                                <p>Dr Irfan Ashraf is the Producer of the Film Dhai Chaal.
                                    He is A TV Anchor at National Media in Pakistan & writing Articles
                                    on Geo Political Strategies of South Asia for international Newspapers.
                                    Dr Irfan is Currently Director General of Kashmir Cultural Academy.
                                    His expertise on Kashmir & Balochistan are acknowledged by state authorities at Top level.
                                    He has a depth insight about  Balochistan & Kashmir .</p>
                            </div>
                            <div className='col-md-6'>
                                <img src={Director} alt="producer" data-aos="fade-left"  data-aos-duration="1000" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='producer'>
                    <h1 className='heading'>WRI<span>TER</span> </h1>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={Writer} alt="producer" data-aos="fade-left"  data-aos-duration="1000" />
                            </div>
                            <div className='col-md-6 producer_right' data-aos="fade-left" data-aos-duration="1000">
                                <h2>Farheen Chaudhry</h2>
                                <p>Farheen Chaudhry is an established Pakistani screenwriter for the last 30 years.
                                    Her contributions for Urdu literature are commendable not only as a writer but as a promoter of literature
                                    and as founder/ chairperson of Literary Arts and Cultural Syndicate.
                                    She has received national and international fame due to her work.
                                    She has represented Pakistan as head delegate on SAARC’s writers, literary,
                                    cultural and Sufi conferences for peace numerous times. She has also served Lok
                                    Virsa as Programme Executive and later as Director Productions at Manhattan International Karachi.
                                    She worked for Evernew Concept Islamabad and as Station Head of PUNJAB TV and STAR ASIA.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='cast_crew_div' ref={castSection}>
                    <h1 className='heading'> CA<span>ST</span></h1>
                    <Slider {...settings} className='container my-5'>
                        {
                            castDetail.map((cast, index) => (
                                <div className='cast_div'>
                                    <img src={cast.img} alt="producer" />
                                    <p>{cast.name}</p>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

                <div className='cast_crew_div' ref={crewSection}>
                    <h1 className='heading'> CR<span>EW</span></h1>
                    <Slider {...settings2} className='container my-5'>
                        <div className='cast_div'>
                            <img src={crew1} alt="producer" />
                            <p>PRODUCTION DESIGING</p>
                            <p>MIRZA OWAIS BAIG</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>ASSOCIATE DIRECTOR</p>
                            <p>SAQIB ZAFAR SIDDIQUI</p>
                        </div>
                        <div className='cast_div'>
                            <img src={AsstProducer} alt="producer" />
                            <p>ASSISTANT PRODUCER</p>
                            <p>FAJJAR MINHAS</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>D.O.P</p>
                            <p>IMRAN LEE</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>COSTUME DESIGNER</p>
                            <p>TAYYAB BOMBAL</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>COSTUME DESIGNER</p>
                            <p>KASHIF KHAN</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>ASSOCIATE DIRECTOR</p>
                            <p>SAQIB ZAFAR SIDDIQUI</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>EDIT</p>
                            <p>ISSAC SOLEMON</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>MARKUP ARTIST</p>
                            <p>MAJID HUSSAIN</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>ART DIRECTOR</p>
                            <p>JAMAL GILANI</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>MUSIC</p>
                            <p>NABEEL UR REHMAN LUTFI</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>PRODUCTION HEAD</p>
                            <p>ABID AZEEM</p>
                        </div>
                        <div className='cast_div'>
                            <img src={dummy} alt="producer" />
                            <p>PRODUCTION HEAD</p>
                            <p>AMIR MUGHAL</p>
                        </div>
                    </Slider>
                </div>

                <div className='story_main' ref={mediaSection}>
                    <h1 className='heading'>MED<span>IA</span> PATN<span>ERS</span></h1>

                    <div className='container' data-aos="zoom-out-down"  data-aos-duration="1000">
                        <div className='row justify-content-center'>
                            <div className='col-md-4 col-4 mb-3'>
                                <img src={media1} alt='1' />
                            </div>

                            <div className='col-md-4 col-4 mb-3'>
                                <img src={media2} alt='2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <img src={mainLogo} alt='main-logo' />
                            </div>

                            <div className='col-md-4 links_col'>
                                <h3>LINKS</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>Trailer</li>
                                    <li>Cast</li>
                                    <li>Crew</li>
                                </ul>
                            </div>

                            <div className='col-md-4 links_col'>
                                <h3>SOCIAL MEDIA LINKS</h3>

                                <div className='d-flex'>
                                    <div className='fb mr-2'>
                                        <a href='https://www.facebook.com/dhaichaalfilm/' > <FaFacebookF /> </a>
                                    </div>
                                    <div className='fb mr-2'>
                                        <a href='https://www.instagram.com/dhaichaal/?hl=en' > <FaInstagram /> </a>
                                    </div>
                                    <div className='fb mr-2'>
                                        <a href='https://twitter.com/dhaai_chaal' > <FaTwitter /> </a>
                                    </div>
                                    <div className='fb mr-2'>
                                        <a href='https://www.youtube.com/channel/UCK_GAifdCNevVphvzXLd7tQ' > <FaYoutube /> </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <p className='text-center'>All Right Reserved @ DhaiChaal2022</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;