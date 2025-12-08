import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import FeaturesSection from "./ui/FeaturesSection";
import Download from "./ui/Download";
import SideSection from "./ui/SideSection";
import Footer from "./ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <HeroSection />
      <SideSection />
      <FeaturesSection />
      <Download />
      <Footer />
    </div>
  );
}
