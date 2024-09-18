import { useState, useEffect } from 'react';
import './Hero.css';
import { FaUserDoctor } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import hero_banner1 from '../../../assets/hero_banner/hero_banner1.jpg'
import hero_banner2 from '../../../assets/hero_banner/hero_banner2.jpg'
import hero_banner3 from '../../../assets/hero_banner/hero_banner3.jpg'
import hero_banner4 from '../../../assets/hero_banner/hero_banner4.jpg'

const images = [hero_banner1, hero_banner2 , hero_banner3, hero_banner4];

function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="hero-container">
    <div className="hero-content">
      <h1>Dr Abdelsattar Ahmed Nasr</h1>
      <div className="paragraph">
        <div className="line"></div>
        <p>Interventional Cardiovascular Specialist</p>
      </div>
    </div>
    <div className="hero-image">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero banner ${index + 1}`}
          style={{
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
    <div className="overlay-boxes">
      {[1, 2, 3].map((index) => (
        <div key={index} className={`box ${index === 2 ? 'b2' : ''}`}>
          <div className='box-title'>
            <FaUserDoctor className='box-icon' />
            <h2>Title</h2>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, corporis beatae. Unde a quas iste qui vitae eligendi sequi laudantium.</p>
          <div className='box-btn'>
            <a href="#">More Info</a>
            <button className='btn-arrow'><IoIosArrowForward /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Hero;
