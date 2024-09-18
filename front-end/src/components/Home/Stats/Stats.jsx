import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Stats.css';

function Stats() {
    const [counterState, setCounterState] = useState(false);

    const stats = [
        {
            data: "5124",
            title: "Coronary Intervention"
        },
        {
            data: "548",
            title: "Cardiac Device Implantation"
        },
        {
            data: "10037",
            title: "Heart Failure Patient Management"
        },
    ];

    return (
        <section className="stats-section">
            <div className="container">
                <div className="content">
                    <h3 className="title">
                        Dedicated to Advancing Cardiovascular Care
                    </h3>
                    <p className="description">
                        As an Interventional Cardiovascular Specialist, we are committed to providing cutting-edge treatments and personalized care to improve heart health and save lives.
                    </p>
                </div>

                <div className="stats-container">
                    <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                        <ul className="stats-list">
                            {stats.map((item, idx) => (
                                <li key={idx} className="stats-item">
                                    <h4 className="stats-number">
                                        {counterState && <CountUp start={0} end={item.data} />}+
                                    </h4>
                                    <p className="stats-title">{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </ScrollTrigger>
                </div>
            </div>
        </section>
    );
}

export default Stats;
