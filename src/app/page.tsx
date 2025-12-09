import Hero from "@/components/ui/Hero";
import BentoGrid from "@/components/ui/BentoGrid";
import ServicesList from "@/components/ui/ServicesList";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <ServicesList />
      <Footer />
    </>
  );
}
