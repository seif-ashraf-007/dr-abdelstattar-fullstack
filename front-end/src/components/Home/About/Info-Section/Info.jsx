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

function Info() {
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
    <section className='info-container' id='certificates'>
      <section className="info-section">
        <div className="info-content">
          <h2 className="info-title">
            My Dear Mentors
          </h2>
          <p className="info-text">
            My journey in the field of interventional cardiology has been
            shaped by the guidance and wisdom of extraordinary mentors.
            Each of them has played a pivotal role in honing my skills,
            deepening my understanding, and inspiring my commitment to
            advancing cardiovascular care. Their relentless pursuit of
            excellence and dedication to patient outcomes have left an
            indelible mark on my practice. This section is a tribute to
            those who have guided me through the complex pathways of
            cardiovascular interventions, ensuring that every patient
            receives the highest standard of care.
          </p>
        </div>
        <div className="image-slider top-img">
          <div
            className="slider-container"
            style={{ transform: `translateX(-${currentMentorIndex * 100}%)` }}
          >
            {mentorImages.map((img, index) => (
              <img key={index} src={img} alt={`Mentor ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>
      </section>

      <section className="info-section opposite-section" >
        <div className="image-slider">
          <div
            className="slider-container"
            style={{ transform: `translateX(-${currentCertificateIndex * 100}%)` }}
          >
            {certificateImages.map((img, index) => (
              <img key={index} src={img} alt={`Certificate ${index + 1}`} className="slider-image" />
            ))}
          </div>
        </div>
        <div className="info-content">
          <h2 className="info-title">
            Certificates
          </h2>
          <p className="info-text">
            My professional journey is marked by a
            steadfast commitment to continuous learning and excellence in
            interventional cardiology. The certifications I have earned are
            not just milestones, but a testament to my dedication to staying
            at the forefront of medical advancements. Each certificate represents
            rigorous training, advanced skills, and the relentless pursuit of
            knowledge. They are a reflection of my ongoing effort to provide
            the most effective and innovative cardiovascular treatments,
            ensuring that my patients receive the best possible care.
          </p>
        </div>
      </section>
    </section>
  );
}

export default Info;
