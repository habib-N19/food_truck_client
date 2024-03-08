import Header from "@/components/Home/Header";
import { ServicesSection } from "@/components/Home/ServicesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <ServicesSection />

    </main>
  );
}
