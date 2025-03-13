import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
    return (
        <div className="p-6 w-11/12 mx-auto shadow-lg rounded-lg relative mb-10 text-white black:text-white" id="about-me">
            <motion.div
                            className="absolute inset-0 -z-10"
                            animate={{
                                boxShadow: [
                                    '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                    '0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB',
                                    '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
            <h1 className="text-3xl font-bold mb-6 p-1" style={{
            backgroundImage: "url(https://i.ibb.co.com/p6LC8CZx/DALL-E-2025-03-13-03-47-54-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>About Me</h1>

            <div className="mb-6 p-1" style={{
            backgroundImage: "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>
                <h2 className="text-2xl font-semibold mb-2">My Programming Journey</h2>
                <p>
                    I started my programming journey with a passion for solving problems and creating dynamic web applications.
                    Over time, I honed my skills in technologies like React, Node.js, and MongoDB, which helped me build scalable,
                    user-friendly projects. I particularly enjoy building interactive features and optimizing performance in web apps.
                </p>
            </div>

            <div className="mb-6 p-1" style={{
            backgroundImage: "url(https://i.ibb.co.com/p6LC8CZx/DALL-E-2025-03-13-03-47-54-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>
                <h2 className="text-2xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc pl-6">
                    <li>React - Building dynamic and responsive UI components.</li>
                    <li>Node.js - Creating backend APIs and handling server-side logic.</li>
                    <li>MongoDB - Managing databases and structuring data efficiently.</li>
                    <li>Tailwind CSS - Crafting modern, responsive designs with utility-first CSS.</li>
                    <li>DaisyUI - Enhancing UI with pre-built, customizable components.</li>
                    <li>Firebase - Implementing authentication and real-time database features.</li>
                    <li>GitHub - Managing code repositories and collaborating on projects.</li>
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 p-1" style={{
            backgroundImage: "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>My Interests</h2>
                <p className='p-1' style={{
            backgroundImage: "url(https://i.ibb.co.com/p6LC8CZx/DALL-E-2025-03-13-03-47-54-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>
                    Outside of programming, I have a deep love for painting and so on. It's a creative outlet that allows me to express myself and unwind after a day of coding. Here’s a glimpse of some of my work:
                </p>
                <div>
                    <h3 className="text-xl font-bold mb-2 w-full mx-auto text-center p-1 mt-2" style={{
            backgroundImage: "url(https://i.ibb.co.com/qLw9RPSX/DALL-E-2025-03-13-03-47-45-A-digital-abstract-network-visualization-with-interconnected-nodes-and-li.webp)",
          }}>Gallery</h3>
                    <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-sky-200 p-4 my-4 rounded-sm relative">
                    <motion.div
                            className="absolute inset-0 -z-10"
                            animate={{
                                boxShadow: [
                                    '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                    '0 0 20px #87CEEB, 0 0 30px #87CEEB, 0 0 40px #87CEEB',
                                    '0 0 10px #87CEEB, 0 0 20px #87CEEB, 0 0 30px #87CEEB',
                                ],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                        />
                        <img src="https://i.ibb.co.com/0prqg3j0/Whats-App-Image-2025-03-13-at-12-38-33-735b2d3f.jpg" alt="Painting 1" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/xqf7CP7Z/Whats-App-Image-2025-03-13-at-12-32-27-d8e1637b.jpg" alt="Painting 2" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/gbNvCQ1c/Whats-App-Image-2025-03-13-at-12-28-51-02f159e2.jpg" alt="Painting 3" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/GgwjLzG/Whats-App-Image-2025-03-13-at-12-28-50-3d1030f3.jpg" alt="Painting 4" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/ksbDdCfX/Whats-App-Image-2025-03-13-at-12-28-53-bd3cab76.jpg" alt="Painting 5" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/kVSYnkWc/Whats-App-Image-2025-03-13-at-12-29-00-0d062b5d.jpg" alt="Painting 6" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/0pwzwcH9/Whats-App-Image-2025-03-13-at-12-35-55-25072269.jpg" alt="Painting 7" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/Tq2YRFXQ/Whats-App-Image-2025-03-13-at-12-34-39-67fd3d2a.jpg" alt="Painting 8" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/N2fVKmC8/Whats-App-Image-2025-03-13-at-12-28-52-f1674a6a.jpg" alt="Painting 9" className="w-full h-[200px] rounded-lg shadow-md" /> 
                        <img src="https://i.ibb.co.com/8LXFRWs4/Whats-App-Image-2025-03-13-at-12-44-13-50c2f9ef.jpg" alt="Painting 10" className="w-full h-[200px] rounded-lg shadow-md" />
                        <img src="https://i.ibb.co.com/vCvGbY7C/Whats-App-Image-2025-03-13-at-12-30-49-d92e26c4.jpg" alt="Painting 9" className="w-full h-[200px] rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;