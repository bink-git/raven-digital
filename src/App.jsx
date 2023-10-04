import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Faq from "./sections/Faq/Faq";
import Footer from "./sections/Footer/Footer";
import ContactForm from "./sections/Form/Form";

function App() {
  return (
    <div className="app flex flex-col">
      <Hero />
      <About />
      <Testimonials />
      <Faq />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
