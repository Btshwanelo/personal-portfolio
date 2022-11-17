import {
  About,
  Contact,
  Footer,
  HeroSection,
  Navbar,
  Portfolio,
  Resume,
  TechStack,
} from "./components";
import styled from "styled-components";
import NavProvider from "./hooks/NavContext";

function App() {
  const handleScrollToContact = () => {
    document
      .getElementById("contactContainer")
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export default App;
