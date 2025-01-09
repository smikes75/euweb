import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { ProcessInfographic } from '../components/ProcessInfographic';
import { ElfsightReviews } from '../components/ElfsightReviews';
import { HomeContact } from '../components/HomeContact';
import { ScrollingBanner } from '../components/ScrollingBanner';
import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <>
    <SEO 
  title="DataHelp.eu - Profesionální obnova dat | HDD, SSD, RAID"
  description="Specializujeme se na profesionální záchranu dat z poškozených médií. Více než 20 let zkušeností s obnovou dat z HDD, SSD, RAID systémů."
  keywords="obnova dat, záchrana dat, hdd recovery, ssd recovery, raid recovery"
  canonical="https://datahelp.eu"
  ogImage="/images/backgrounds/home-bg.jpg"
/>

      <Hero />
      <ScrollingBanner />
      <Services />
      <Gallery />
      <ProcessInfographic />
      <ElfsightReviews />
      <HomeContact />
    </>
  );
}