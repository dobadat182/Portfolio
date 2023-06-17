import Contact from '../layouts/Contact/Contact';
import Hero from '../layouts/Hero/Hero';
import Qualification from '../layouts/Qualification/Qualification';
import Services from '../layouts/Services/Services';
import Skills from '../layouts/Skills/Skills';
import Projects from '../layouts/Projects/Projects';
import Timeline from '../layouts/Timeline/Timeline';
import Example from '../components/Example/Example';

const Home = () => {
    return (
        <>
            <Example />
            <Hero />
            <Skills />
            <Timeline />
            <Projects />
            {/* <Qualification /> */}
            {/* <Services /> */}
            <Contact />
        </>
    );
};

export default Home;
