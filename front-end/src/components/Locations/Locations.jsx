import './Locations.css';
import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { IoCallOutline, IoHomeOutline } from "react-icons/io5";
import { RiVidiconLine } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdMoreTime, MdMonitorHeart } from "react-icons/md";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from "@fortawesome/free-solid-svg-icons";

function Locations() {
    const [selectedLocation, setSelectedLocation] = useState('location1');

    const Location2Content = () => (
        <div className='loc2-container'>
    <div className="tele">
        <h1><RiVidiconLine className='feat-icon section-icon' /> Telemedicine Service</h1>
        <p className='subtitle'>
            You can book an appointment with Dr. Abd Al Sattar through our video call
            service <span className='cus-span'>(Telemedicine)</span>.
        </p>
        <p className='sub-paragraph'>
            Our services include <span className='cus-span'> Remote Cardiac Consultation</span>.
            Telemedicine is an approved method by the <a href="https://www.heart.org/en/professional/telehealth" target='_blank'>
            <span className='cus-span link-span'>American Heart Association</span></a> to help
            you follow your treatment plan.
        </p>
        <br></br>
        <a href='https://www.facebook.com/share/p/QEt9wGVNbnzZTVaw/' target='_blank' className='read-btn'>Read more</a>
    </div>
    <hr />
    <div className="home">
        <h1><IoHomeOutline className='feat-icon section-icon' /> Home Visit Service</h1>
        <p className='subtitle'>
            Dr. Abd Al Sattar also offers home visits for those who prefer the comfort and privacy of their own home for medical consultations and check-ups.
        </p>
        <p className='sub-paragraph'>
            The home visit service includes a full clinical examination, ECG, echocardiography, and other necessary tests to ensure you receive the best care possible without leaving your home.
            With the convenience of home visits, following up on your treatment plan has never been easier.
        </p>
    </div>
    <hr />
    <div className="contact-icons">
        <a target='_blank' href="https://api.whatsapp.com/send?phone=%2B201143410534&context=ARBoWH2bcXRLE46eap1ChI_
        JrR_F4ildQ9NVo4FJNRSVVu042bjoLfU_HTuC_zyOVqYLX1eECUNYu4cQPOEjSFtHnuEHDTbpyFLXjLf_uMTsoHFP1zq3pAPiuGkMmZ9LWPIZPOs8bPkYI_rqx-Ipw6qnxQ">
            <FaWhatsapp className='contact-icon whatsapp'/>
        </a>
        <a href="tel:+2010043410534"><IoCallOutline className='contact-icon call'/></a>
        <a target='_blank' href="https://www.facebook.com/dr.abdelsattarnasr">
            <FaFacebook className='contact-icon facebook'/>
        </a>
    </div>
</div>

    );

    return (
        <>
            <div className="locations-container">
                <div className="title-banner">
                    <div className="content">
                        <div className="title">Locations</div>
                        <div className="paragraph">
                        Dr. Abdelsattar Ahmed Nasr is a renowned cardiologist based in Cairo, w
                        orking at Mokattam Hospital HIO, which is a tertiary center for cardiology,
                        and at his clinic located on the Nile Corniche in Roud Elfarag.
                        Recently, he has also started offering his specialized cardiac
                        care services in his hometown in the Delta region,
                        ensuring more communities have access to top-quality care.
                        </div>
                    </div>

                    <div className="features">
                        <RiVidiconLine className='feat-icon' />
                        <IoHomeOutline className='feat-icon' />
                        <GiElectric className='feat-icon' />
                        <MdOutlineHealthAndSafety className='feat-icon' />
                        <MdMoreTime className='feat-icon' />
                        <MdMonitorHeart className='feat-icon' />
                    </div>
                </div>

                <div className="container">
                    <div className="button-group">
                        <button
                            className={`location-button ${selectedLocation === 'location2' ? 'active' : ''}`}
                            onClick={() => setSelectedLocation('location2')}
                        >
                            Telemedicine - Home Visit
                        </button>

                        <button
                            className={`location-button ${selectedLocation === 'location1' ? 'active' : ''}`}
                            onClick={() => setSelectedLocation('location1')}
                        >
                            Kafr Shukr, Qalyubia
                        </button>
                        <button
                            className={`location-button ${selectedLocation === 'location3' ? 'active' : ''}`}
                            onClick={() => setSelectedLocation('location3')}
                        >
                            Nile Corniche, Cairo
                        </button>
                    </div>

                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={selectedLocation}
                            timeout={300}
                            classNames="info-fade"
                        >
                            <div className="location-info">
                                {selectedLocation === 'location1' && (
                                    <div className="info-text">
                                        <h2>Kafr Shukr, Qalyubia</h2>
                                        <p><i className="lni lni-map-marker info-icon"></i> Kayan Specialized Hospital - Mansoura-Banha Road - Esnyet - Next to Al-Sharawy Mosque</p>
                                        <p><i className="lni lni-phone info-icon"></i>+201143818340, +201129191970, +201143818304</p>
                                        <p><FontAwesomeIcon icon={faClockFour} className='info-icon' /> Daily at 9 PM except Wednesdays</p>
                                        <p><i className="lni lni-popup info-icon warn"></i> Please follow up with the clinic secretary on Sunday for possible delays due to surgeries</p>
                                        <hr className='divider'/>
                                        <div className="info-note">
                                            <h5>Cardiac Ultrasound Clinic</h5>
                                            <h6>Prof. Dr. Hamada Khater Radiology Center</h6>
                                            <p className='paragprah'>Available daily except Wednesdays with a prior reservation</p>
                                            <p><TbDeviceLandlinePhone className='info-icon' /> 0132517017</p>
                                        </div>
                                        <hr className='divider'/>
                                        <div className="start-bar">
                                            <div className="dirc">
                                                <p className='dir-p'>
                                                    <CiLocationArrow1 className='info-icon'/> <a href='https://maps.app.goo.gl/weXXKKRKYs45hbQE8' target='_blank' className='directions'>
                                                    Get Directions
                                                    </a>
                                                </p>
                                            </div>

                                            <div className="call">
                                                <p className='dir-p'>
                                                    <IoCallOutline className='info-icon' />
                                                    <a href="tel:+201110767434" className='call-p'>
                                                        Contact Secretary
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                )}

                                {selectedLocation === 'location2' && (
                                            <Location2Content />
                                )}


                                {selectedLocation === 'location3' && (
                                    <div className="info-text" >
                                        <h2>Nile Corniche, Cairo</h2>
                                        <p><i className="lni lni-map-marker info-icon"></i> 12 Agha Khan Towers - Next to Nasser Institute - In front of McDonald&apos;s and La Poire</p>
                                        <p><i className="lni lni-phone info-icon"></i> +201006730022</p>
                                        <p><FontAwesomeIcon icon={faClockFour} className='info-icon' /> Sunday, Tuesday, and Thursday - From 3 PM</p>
                                        <p><i className="lni lni-popup info-icon warn"></i> Please follow up with the clinic secretary on Sunday for possible delays due to surgeries</p>
                                        <hr className='divider'/>
                                        <div className="start-bar">
                                            <div className="dirc">
                                                <p className='dir-p'>
                                                    <CiLocationArrow1 className='info-icon'/> <a href='https://maps.app.goo.gl/DaQ29Heta2su88V68' target='_blank' className='directions'>
                                                    Get Directions
                                                    </a>
                                                </p>
                                            </div>

                                            <div className="call">
                                                <p className='dir-p'>
                                                    <IoCallOutline className='info-icon' />
                                                    <a href="tel:+201110767434" className='call-p'>
                                                        Contact Secretary
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Conditionally render map only for location1 and location3 */}
                                {selectedLocation !== 'location2' && (
                                    <div className="map-container">
                                        <iframe
                                            src={
                                                selectedLocation === 'location1'
                                                    ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3893.2462739316984!2d31.242094675572297!3d30.526786974684224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMxJzM2LjQiTiAzMcKwMTQnNDAuOCJF!5e1!3m2!1sen!2seg!4v1725347939856!5m2!1sen!2seg"
                                                    : selectedLocation === 'location3'
                                                        ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3910.2027116500285!2d31.238620875555945!3d30.100911574895125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDA2JzAzLjMiTiAzMcKwMTQnMjguMyJF!5e1!3m2!1sen!2seg!4v1725347882583!5m2!1sen!2seg"
                                                        : ""
                                            }
                                            allowFullScreen=""
                                            aria-hidden="false"
                                            tabIndex="0"
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </>
    );
}

export default Locations;
