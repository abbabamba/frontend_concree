import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import OpportunityList from '../components/OpportunityList';
import TestimonialSection from '../components/TestimonialSection';
import PartnerSection from '../components/PartnerSection';
import ContactSection from '../components/ContactSection';
import AccompanimentSection from '../components/AccompanimentSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Concree - Développez votre entreprise</title>
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4">
        <HeroSection />
        <FeaturesSection />
        <AccompanimentSection />
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Des opportunités partagées tous les jours</h2>
          <OpportunityList />
        </section>
        <TestimonialSection />
        <PartnerSection />
        <ContactSection />


      </main>
      <Footer />
    </div>
  );
}