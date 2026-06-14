import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSpecials from './components/FeaturedSpecials';
import About from './components/About';
import Menu from './components/Menu';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Reservation from './components/Reservation';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-offwhite">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSpecials />
        <About />
        <Menu />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
