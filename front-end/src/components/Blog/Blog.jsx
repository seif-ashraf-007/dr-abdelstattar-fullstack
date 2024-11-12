import './Blog.module.css';
import { useState, useRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import BlogPost from './BlogPost/BlogPost';
import { RiVidiconLine } from "react-icons/ri";
import { GiElectric } from "react-icons/gi";
import { MdOutlineHealthAndSafety, MdMoreTime, MdMonitorHeart } from "react-icons/md";
import styles from './Blog.module.css'; // Import CSS module

function Blog() {
    const blogPosts = [
        {
            id: 'post1',
            title: 'The Importance of Telemedicine',
            paragraph: '<p>Telemedicine is transforming the way healthcare is delivered. <strong>Remote consultations</strong> allow patients to access expert care from the comfort of their homes.</p>',
            pictures: ['https://placehold.co/800x400', 'https://placehold.co/800x400'],
            author: 'Dr. Abdelsattar Ahmed Nasr',
            timestamp: '2023-09-01T10:30:00Z',
        },
        {
            id: 'post2',
            title: 'Benefits of Home Visits for Cardiac Patients',
            paragraph: '<p>Home visits provide a convenient way for cardiac patients to receive <strong>personalized care</strong> without needing to travel. <em>Read more to learn about the benefits</em>.</p>',
            pictures: ['https://placehold.co/100x50', 'https://placehold.co/100x50'],
            author: 'Dr. Abdelsattar Ahmed Nasr',
            timestamp: '2023-08-15T15:00:00Z',
        },
        {
            id: 'post3',
            title: 'Benefits of Home Visits for Cardiac Patients',
            paragraph: '<p>Home visits provide a convenient way for cardiac patients to receive <strong>personalized care</strong> without needing to travel. <em>Read more to learn about the benefits</em>.</p>',
            pictures: ['https://placehold.co/100x50', 'https://placehold.co/100x50'],
            author: 'Dr. Abdelsattar Ahmed Nasr',
            timestamp: '2023-08-15T15:00:00Z',
        },
        {
            id: 'post4',
            title: 'Benefits of Home Visits for Cardiac Patients',
            paragraph: '<p>Home visits provide a convenient way for cardiac patients to receive <strong>personalized care</strong> without needing to travel. <em>Read more to learn about the benefits</em>.</p>',
            pictures: ['https://placehold.co/100x50', 'https://placehold.co/100x50'],
            author: 'Dr. Abdelsattar Ahmed Nasr',
            timestamp: '2023-08-15T15:00:00Z',
        },
        {
            id: 'post5',
            title: 'TESTSETSET',
            paragraph: '<p>Home visits provide a convenient way for cardiac patients to receive <strong>personalized care</strong> without needing to travel. <em>Read more to learn about the benefits</em>.</p>',
            pictures: ['https://placehold.co/100x50'],
            author: 'Dr. Abdelsattar Ahmed Nasr',
            timestamp: '2023-08-15T15:00:00Z',
        },
    ];

    const [selectedPost, setSelectedPost] = useState(blogPosts[0].id); // Default to the first blog post
    const activePost = blogPosts.find(post => post.id === selectedPost);

    const nodeRef = useRef(null); // Create a ref for CSSTransition

    return (
        <>
            <div className={styles.blogContainer}>
                <div className={styles.titleBanner}>
                    <div className={styles.titleBannerContent}>
                        <div className={styles.titleBannerTitle}>Blog</div>
                        <div className={styles.titleBannerParagraph}>
                            Welcome to our blog section, where we share insights, updates, and information on our medical services and telemedicine solutions.
                        </div>
                    </div>

                    <div className={styles.features}>
                        <RiVidiconLine className={styles.featIcon} />
                        <GiElectric className={styles.featIcon} />
                        <MdOutlineHealthAndSafety className={styles.featIcon} />
                        <MdMoreTime className={styles.featIcon} />
                        <MdMonitorHeart className={styles.featIcon} />
                    </div>
                </div>

                <div className={styles.blogContent}>
                    <div className={styles.buttonGroupContainer}>
                        <div className={styles.buttonGroup}>
                            {blogPosts.map((post) => (
                                <button
                                    key={post.id}
                                    className={`${styles.blogButton} ${selectedPost === post.id ? styles.blogButtonActive : ''}`}
                                    onClick={() => setSelectedPost(post.id)}
                                >
                                    {post.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={selectedPost}
                            nodeRef={nodeRef} // Use nodeRef instead of findDOMNode
                            timeout={300}
                            classNames={{
                                enter: styles.infoFadeEnter,
                                enterActive: styles.infoFadeEnterActive,
                                exit: styles.infoFadeExit,
                                exitActive: styles.infoFadeExitActive,
                            }}
                        >
                            <div ref={nodeRef} className={styles.blogInfo}> {/* Add ref here */}
                                <BlogPost
                                    title={activePost.title}
                                    paragraph={activePost.paragraph}
                                    pictures={activePost.pictures}
                                    author={activePost.author}
                                    timestamp={activePost.timestamp}
                                />
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
        </>
    );
}

export default Blog;