import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Faq from "./sections/Faq/Faq";
import Footer from "./sections/Footer/Footer";
import Contacts from "./sections/Contacts/Contacts";
import Statistic from "./components/Statistic";
import Works from "./sections/Works/Works";
import Team from "./sections/Team/Team";
import Blog from "./sections/Blog/Blog";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="app flex flex-col">
      <Hero />
      <About />
      <Works />
      <Statistic />
      <Testimonials />
      <Team />
      <Blog />
      <Faq />
      <Clients />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
