import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
import About from '../components/About/About'
import Works from '../components/HowWorks/HowWorks';
import Contact from '../components/Contact/ContactContent';

function HomeView() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Works />
            <Contact />
        </div>
    )
}

export default HomeView