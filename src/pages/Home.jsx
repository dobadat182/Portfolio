import Contact from '../layouts/Contact/Contact';
import Hero from '../layouts/Hero/Hero';
import Skills from '../layouts/Skills/Skills';
import Projects from '../layouts/Projects/Projects';
import Timeline from '../layouts/Timeline/Timeline';

const Home = () => {
    return (
        <>
            <Hero />
            <Skills />
            <Timeline />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;
