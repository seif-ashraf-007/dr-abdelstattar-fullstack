import React, { useState, useEffect } from 'react';

import './Info.css';
import img1 from '../../../../assets/mentors/1.png';
import img2 from '../../../../assets/mentors/2.png';
import img3 from '../../../../assets/mentors/3.png';
import img4 from '../../../../assets/mentors/4.png';
import img5 from '../../../../assets/mentors/5.png';
import img6 from '../../../../assets/mentors/6.png';
import img7 from '../../../../assets/mentors/7.png';
import img8 from '../../../../assets/mentors/8.png';
import img9 from '../../../../assets/mentors/9.png';
import img10 from '../../../../assets/mentors/10.png';

import cert1 from '../../../../assets/certificates/1.jpg'
import cert2 from '../../../../assets/certificates/2.jpg'
import cert3 from '../../../../assets/certificates/3.jpg'
import cert4 from '../../../../assets/certificates/4.jpg'
import cert5 from '../../../../assets/certificates/5.jpg'
import cert6 from '../../../../assets/certificates/6.jpg'
import cert7 from '../../../../assets/certificates/7.jpg'

const Info = () => {
  const mentorImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const certificateImages = [cert1, cert2, cert3, cert4, cert5, cert6, cert7];

  const [currentMentorIndex, setCurrentMentorIndex] = useState(0);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  useEffect(() => {
    const mentorIntervalId = setInterval(() => {
      setCurrentMentorIndex((prevIndex) => (prevIndex + 1) % mentorImages.length);
    }, 5000);

    return () => clearInterval(mentorIntervalId);
  }, [mentorImages.length]);

  useEffect(() => {
    const certificateIntervalId = setInterval(() => {
      setCurrentCertificateIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
    }, 5000);

    return () => clearInterval(certificateIntervalId);
  }, [certificateImages.length]);

  return (
    <section className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mentors Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">My Dear Mentors</h2>
            <p className="text-gray-600">
              My journey in the field of interventional cardiology has been
              shaped by the guidance and wisdom of extraordinary mentors.
              Each of them has played a pivotal role in honing my skills,
              deepening my understanding, and inspiring my commitment to
              advancing cardiovascular care.
            </p>
          </div>
          
          <div className="relative w-full lg:w-[600px] h-[400px] overflow-hidden">
            <div 
              className="absolute w-full h-full transition-transform duration-1000 ease-in-out flex"
              style={{ transform: `translateX(-${currentMentorIndex * 100}%)` }}
            >
              {mentorImages.map((img, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img 
                    src={img} 
                    alt={`Mentor ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <div className="relative w-full lg:w-[600px] h-[400px] overflow-hidden">
            <div 
              className="absolute w-full h-full transition-transform duration-1000 ease-in-out flex"
              style={{ transform: `translateX(-${currentCertificateIndex * 100}%)` }}
            >
              {certificateImages.map((img, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img 
                    src={img} 
                    alt={`Certificate ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Certificates</h2>
            <p className="text-gray-600">
              My professional journey is marked by a steadfast commitment 
              to continuous learning and excellence in interventional cardiology. 
              The certifications I have earned are not just milestones, but 
              a testament to my dedication to staying at the forefront of 
              medical advancements.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Info;