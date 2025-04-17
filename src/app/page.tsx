// app/page.tsx (or pages/index.tsx depending on your setup)
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/experience"

export default function Home() {
  return (
    <main className="bg-white min-h-screen text-charcoal">
      <Hero />
      <Experience/>
    </main>
  );
}