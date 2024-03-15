import BeginJourney from "@/components/Home/BeginJourney/BeginJourney";
import CardServices from "@/components/Home/CardServices/CardServices";
import Header from "@/components/Home/Header";
import MapSection from "@/components/Home/MapSection/MapSection";
import { ServicesSection } from "@/components/Home/ServicesSection";
import SubcriptionCard from "@/components/Home/Subscription/SubcriptionCard";
import VendorCard from "@/components/Home/VendorCard/VendorCard";
import VendorTestimonials from "@/components/Home/VendorTestimonials/VendorTestimonials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ServicesSection />
      <CardServices></CardServices>
   
      <div>
        <BeginJourney></BeginJourney>
      </div>
      <div className="flex flex-wrap flex-shrink-0 my-5 gap-2 justify-center">
      <VendorCard></VendorCard>
      <VendorCard></VendorCard>
      <VendorCard></VendorCard>
      </div>
      <div className="my-5 flex flex-wrap flex-shrink-0 gap-2 justify-center">
        <SubcriptionCard></SubcriptionCard>
        <SubcriptionCard></SubcriptionCard>
        <SubcriptionCard></SubcriptionCard>
      </div>
      <VendorTestimonials></VendorTestimonials>
    </main>
  );
}
