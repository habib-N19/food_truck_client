import BeginJourney from "@/components/Home/BeginJourney/BeginJourney";
import CardServices from "@/components/Home/CardServices/CardServices";
import Header from "@/components/Home/Header";
import MapSection from "@/components/Home/MapSection/MapSection";
import { ServicesSection } from "@/components/Home/ServicesSection";
import VendorCard from "@/components/Home/VendorCard/VendorCard";
import VendorTestimonials from "@/components/Home/VendorTestimonials/VendorTestimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ServicesSection />
      <CardServices></CardServices>
      <VendorTestimonials></VendorTestimonials>
      <div className="flex flex-col my-5 gap-2 items-center md:flex-row md:justify-center">
      <VendorCard></VendorCard>
      <VendorCard></VendorCard>
      <VendorCard></VendorCard>
      </div>
      <div>
        <BeginJourney></BeginJourney>
      </div>
      <div className="my-5">
<MapSection></MapSection>
      </div>
    </main>
  );
}
