import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeader } from './section-header';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '1',
    title: 'Pick a starter option',
    description: 'Choose from select produce to start. Keep, add, or remove items',
    color: 'bg-primary/80',
    textColor: 'text-primary-foreground',
  },
  {
    number: '2',
    title: 'Shop groceries',
    description: 'Choose from select produce to start. Keep, add, or remove items',
    color: 'bg-yellow-300/80',
    textColor: 'text-yellow-800',
  },
  {
    number: '3',
    title: 'We deliver. You enjoy.',
    description: 'Choose from select produce to start. Keep, add, or remove items',
    color: 'bg-red-300/70',
    textColor: 'text-red-800',
  },
];

export function HowItWorks() {
  const bgImage = PlaceHolderImages.find((p) => p.id === 'how-it-works-bg');

  return (
    <section className="relative py-16 md:py-20 bg-green-100/50 overflow-hidden rounded-lg">
      {bgImage && (
        <Image
          src="https://res.cloudinary.com/dmlavu7is/image/upload/v1762861368/background-about_grabbz.jpg"
          alt={bgImage.description}
          fill
          className="object-cover object-top opacity-80"
          data-ai-hint={bgImage.imageHint}
        />
      )}
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          title="How It Works"
          subtitle="Getting fresh, healthy food has never been easier. Follow these simple steps to get started."
        />
        <div className="grid md:grid-cols-3 gap-8 text-center items-start">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`w-28 h-28 rounded-full flex items-center justify-center text-5xl font-bold mb-6 ${step.color} ${step.textColor} shadow-lg transition-transform duration-300 hover:scale-125`}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-foreground/80 max-w-xs">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="mt-8 hidden md:block">
                  <ArrowRight className="w-12 h-12 text-primary/30 transform rotate-12" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}