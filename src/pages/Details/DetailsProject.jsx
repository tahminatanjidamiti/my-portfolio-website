import React, {  useState, useEffect } from 'react';import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const DetailsProject = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://my-portfolio-server-dusky-nine.vercel.app/project_details/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);

    if (!data) return <div>Loading...</div>

    const { 
        project_name, 
        project_image, 
        main_technology_stack, 
        description, 
        live_project_link, 
        github_repository_link, 
        challenges_faced, 
        improvements_and_future_plans 
    } = data;
    return (
        <div className="p-6 max-w-4xl mx-auto bg-sky-300 shadow-lg rounded-lg my-6 relative">
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
            <h1 className="text-3xl font-bold mb-4">{project_name} Details</h1>

            <div className="mb-6">
                <img src={project_image} alt={project_name} className="w-full h-auto rounded-lg shadow-md"/>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Main Technology Stack</h2>
            <ul className="list-disc pl-6 mb-4">
                {main_technology_stack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
            <p className="mb-4">{description}</p>

            <h2 className="text-2xl font-semibold mb-2">Live Project Link</h2>
            <a href={live_project_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {live_project_link}
            </a>

            <h2 className="text-2xl font-semibold mb-2">GitHub Repository Link (Client)</h2>
            <a href={github_repository_link} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                {github_repository_link}
            </a>

            <h2 className="text-2xl font-semibold mb-2">Challenges Faced</h2>
            <ul className="list-disc pl-6 mb-4">
                {challenges_faced.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Potential Improvements and Future Plans</h2>
            <ul className="list-disc pl-6">
                {improvements_and_future_plans.map((plan, index) => (
                    <li key={index}>{plan}</li>
                ))}
            </ul>
            <Link className="btn btn-info mt-2" to="/">GO BACK</Link>
        </div>
    );
};
export default DetailsProject;