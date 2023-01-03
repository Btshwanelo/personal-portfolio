import NavProvider from './hooks/NavContext';
import { About, Contact, Footer, HeroSection, Navbar, Portfolio, Resume, TechStack } from './components';

function App() {
  const handleScrollToContact = () => {
    document.getElementById('contactContainer').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className='min-h-[100vh] w-full'>
      <NavProvider>
        <Navbar />
        <HeroSection />
        <Portfolio />
        <Resume />
        <TechStack />
        <About handleClick={handleScrollToContact} />
        <Contact />
        <Footer />
      </NavProvider>
    </div>
  );
}

export default App;
