import React from 'react';
import Benefits from './Benefits';
import Services from './services';
import Testimonials from './Testimonials';
import Images from './Images';

export default function Main() {
  return (
    <main className="main">
      <Benefits />
      <Services />
      <Testimonials />
      <Images />
    </main>
  );
}
