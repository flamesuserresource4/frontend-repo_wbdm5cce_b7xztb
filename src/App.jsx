import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Collection from "./components/Collection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle vignette */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />
      </div>

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <Collection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
