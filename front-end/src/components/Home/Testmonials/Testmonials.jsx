import './Testmonials.css'

export default function Testmonials () {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "John Smith",
            quote: "Dr. Abdelsattar's expertise and care transformed my life. I’m now healthier and more active than ever. His dedication is truly remarkable."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/41.jpg",
            name: "Emily Davis",
            quote: "Dr. Abdelsattar provided exceptional care throughout my treatment. I felt supported every step of the way, and the results speak for themselves."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Michael Lee",
            quote: "Despite my initial nerves, Dr. Abdelsattar and his team were fantastic. Their professionalism and attention to detail were outstanding."
        },
    ]

    return (
        <section className="relative py-14" id='testmonials'>
            <div className="relative z-10 max-w-screen-xl px-4 mx-auto md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
                        Hear from Our Patients
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Discover how our specialized cardiovascular treatments have made a difference in the lives of our patients. Our commitment to exceptional care and innovative procedures is reflected in their experiences.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-white border shadow-md rounded-xl">
                                    <div className="p-4">
                                        <i className="text-2xl fa-solid fa-quote-left"></i>
                                    </div>
                                    <figure>
                                        <blockquote>
                                            <p className="px-4 py-1 text-lg text-gray-800">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                        <div className="flex items-center p-4 mt-6 gap-x-4" style={{ background: "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)" }}>
                                            <img src={item.avatar} className="w-16 h-16 border-2 border-[#2d3665] rounded-full" />
                                            <div>
                                                <span className="block font-semibold text-gray-800">{item.name}</span>
                                            </div>
                                        </div>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="absolute top-0 w-full h-[350px]" style={{ background: "linear-gradient(152.92deg, rgba(19, 108, 157, 0.2) 4.54%, rgba(19, 108, 157, 0.17) 34.2%, rgba(45, 54, 101, 0.1) 77.55%)" }}></div>
        </section>
    )
}
