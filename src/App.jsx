import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/HeaderFooter/Footer/Footer";
import Header from "./components/HeaderFooter/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
