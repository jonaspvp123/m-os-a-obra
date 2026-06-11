import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import About from "./components/About";
import Brands from "./components/Brands";
import Gallery from "./components/Gallery";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-primary selection:text-white" id="main-layout-root">
      {/* Dynamic sticky navigation */}
      <Navbar />

      {/* Main page content sections flow */}
      <main className="flex-grow">
        <Hero />
        <Categories />
        <About />
        <Brands />
        <Gallery />
        <CTA />
      </main>

      {/* Footer contacts & details */}
      <Footer />
    </div>
  );
}
