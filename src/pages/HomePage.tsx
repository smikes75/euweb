import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { ProcessInfographic } from '../components/ProcessInfographic';
import { ElfsightReviews } from '../components/ElfsightReviews';
import { HomeContact } from '../components/HomeContact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <ProcessInfographic />
      <ElfsightReviews />
      <HomeContact />
    </>
  );
}