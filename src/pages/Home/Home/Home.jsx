import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import { useLoaderData } from 'react-router-dom';
import Education from '../Educations/Education';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    const loadedProjects = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <Projects loadedProjects={loadedProjects}></Projects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;