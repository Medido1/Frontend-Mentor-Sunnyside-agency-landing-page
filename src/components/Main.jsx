import React from 'react';
import Benefits from './Benefits';
import Services from './services';
import Testimonials from './Testimonials';

export default function Main() {
  return (
    <main className="main">
      <Benefits />
      <Services />
      <Testimonials />
    </main>
  );
}