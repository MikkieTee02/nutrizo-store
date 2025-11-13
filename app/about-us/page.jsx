import { Hero } from '@/components/about/hero';
import { HowItWorks } from '@/components/about/how-it-works';
import { OurTeam } from '@/components/about/team';
import { Testimonials } from '@/components/about/testimonials';
import { Contact } from '@/components/about/contact';
import { ShopForGood } from '@/components/about/shop-for-good';

export default function AboutPage() {
  return (
    <div className="bg-background">
      <Hero />
      <div className="px-6 md:px-16 lg:px-20">
        <ShopForGood />
        <HowItWorks />
        <div className="space-y-24 md:space-y-32 mt-16 md:mt-24">
          <OurTeam />
        </div>
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}