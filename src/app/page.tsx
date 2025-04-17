// app/page.tsx (or pages/index.tsx depending on your setup)
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-charcoal">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}