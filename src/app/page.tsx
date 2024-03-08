import Header from "@/components/Home/Header";
import { ServicesSection } from "@/components/Home/ServicesSection";
import Temp from "@/components/Temp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <ServicesSection />
    </main>
  );
}
