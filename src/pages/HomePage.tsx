import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Gallery } from '../components/Gallery';
import { ProcessInfographic } from '../components/ProcessInfographic';
import { Reviews } from '../components/Reviews';
import { Contact } from '../components/Contact';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Gallery />
      <ProcessInfographic />
      <Reviews />
      <Contact />
    </>
  );
}