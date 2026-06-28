'use client';
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import AppDownload from "@/components/AppDownload";
import { useLanguage } from "@/i18n/LanguageContext";

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <Container>
        <AppDownload />
        <Benefits />
        <Section id="pricing" title={t.sections.pricingTitle} description={t.sections.pricingDescription}>
          <Pricing />
        </Section>
        <Section id="testimonials" title={t.sections.testimonialsTitle} description={t.sections.testimonialsDescription}>
          <Testimonials />
        </Section>
        <FAQ />
        <Stats />
        <CTA />
        <AppDownload />
      </Container>
    </>
  );
};

export default HomePage;
