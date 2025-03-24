import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Education from '../Educations/Education';
import Skills from '../Skills/Skills';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;