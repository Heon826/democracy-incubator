import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import MissionSection from '@/components/sections/mission';
import WhatWeDoSection from '@/components/sections/what-we-do';
import FaqSection from '@/components/sections/faq';
import { FloatingRegisterButton } from '@/components/sections/floating-register-button';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <MissionSection />
      <WhatWeDoSection />
      <FaqSection />
      <FloatingRegisterButton />
    </main>
  );
}