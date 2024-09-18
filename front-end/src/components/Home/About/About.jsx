import './About.css'
import Info from './Info-Section/Info'

function About() {
  return (

    <>
        <div className='about-container' id='about'>
            <div className='about-title'>
                <h2>ABOUT</h2>
                <h1>Leading the Way in Heart Health</h1>
                <p>- We take care of you -</p>
            </div>

            <div className='cards'>
                <div>
                    <img src="https://placehold.co/320x350" alt="" />
                    <h2>01</h2>
                    <div className='card-body'>
                        <div>
                        <h5>Comprehensive Heart Care</h5>
                        <p>Our clinic offers extensive cardiovascular services, ranging from routine check-ups to advanced diagnostics.
                            We focus on personalized care to ensure every patient gets the attention they deserve.</p>
                        </div>
                    </div>
                </div>

                <div className='mid-card'>
                <img src="https://placehold.co/320x350" alt="" />
                <h2>02</h2>
                    <div className='card-body'>
                        <div>
                        <h5>Cutting-Edge Technology</h5>
                        <p>We use the latest advancements in medical technology to provide precise diagnostics and effective treatments.
                            Our state-of-the-art equipment ensures you receive the highest quality care available.</p>
                        </div>
                    </div>
                </div>

                <div>
                <img src="https://placehold.co/320x350" alt="" />
                <h2>03</h2>
                <div className='card-body'>
                        <div>
                        <h5>Patient-Centered Care</h5>
                        <p>We believe in a holistic approach to cardiovascular health, keeping the patient at the core of everything we do.
                            Our team collaborates with you to develop a plan tailored to your specific needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Info />
    </>
  )
}

export default About
