import Contact from '../layouts/Contact/Contact';
import Hero from '../layouts/Hero/Hero';
import Qualification from '../layouts/Qualification/Qualification';
import Services from '../layouts/Services/Services';
import Skills from '../layouts/Skills/Skills';
import Projects from '../layouts/Projects/Projects';

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Projects />
            <Qualification />
            <Services />
            <Contact />
        </>
    );
};

export default Home;
