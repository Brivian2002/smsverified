import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LiveNumbers from "./components/LiveNumbers";
import AdBanner from "./components/AdBanner";
import AdSkyscraper from "./components/AdSkyscraper";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AdBanner />
      <Navbar />
      <main>
        <Hero />
        <LiveNumbers />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <AdSkyscraper />
    </div>
  );
}
