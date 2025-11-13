import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ShopForGood() {
  const image = PlaceHolderImages.find(p => p.id === 'shop-for-good');

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1 h-[80vh]">
            {image && (
              <Image
                src="https://res.cloudinary.com/dmlavu7is/image/upload/v1763020815/Screenshot_2025-11-13_095340_ikq69l.png"
                alt={image.description}
                fill
                className="rounded-lg object-cover"
                data-ai-hint={image.imageHint}
              />
            )}
            <div className="absolute -inset-8 bg-yellow-300/50 rounded-full blur-3xl -z-10" />
          </div>
          <div className="order-1 md:order-2">
            <p className="font-semibold text-primary">We supply high quality organic product</p>
            <h2 className="text-3xl font-bold text-text-primary mt-2 mb-6">
              A shop for good people by good people
            </h2>
            <p className="text-foreground/80 mb-4">
              Buy natural, sustainable and chemical-free products from local sellers across the country.
            </p>
            <p className="text-foreground/80 mb-8">
              We are a strong community of 100,000+ customers and 600+ sellers who aspire to be good, do good, and spread goodness. We are a democratic, self-sustaining, two-sided marketplace which thrives on trust and is built on community and quality content.
            </p>
            <button className="bg-accent text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
