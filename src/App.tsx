/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from './components/Nav';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import PainSection from './components/PainSection';
import Insight from './components/Insight';
import Inside from './components/Inside';
import ForWho from './components/ForWho';
import Suppliers from './components/Suppliers';
import Shipping from './components/Shipping';
import Bonus from './components/Bonus';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <SocialProof />
      <PainSection />
      <Insight />
      <Inside />
      <ForWho />
      <Suppliers />
      <Shipping />
      <Bonus />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
