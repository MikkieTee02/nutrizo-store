import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeader } from './section-header';
import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const featuredProducts = [
  {
    name: 'Organic Granola Bar',
    image: PlaceHolderImages.find(p => p.id === 'product-1'),
  },
  {
    name: 'Cold-Pressed Juice',
    image: PlaceHolderImages.find(p => p.id === 'product-2'),
  },
  {
    name: 'Superfood Snack Mix',
    image: PlaceHolderImages.find(p => p.id === 'product-3'),
  },
];

export function OurProducts() {
  return (
    <section id="products">
      <SectionHeader title="Our Products" subtitle="Discover a selection of our fan-favorites." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredProducts.map((product, index) => (
          <div key={index} className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white rounded-lg shadow-md">
            <div className="relative h-64 w-full overflow-hidden">
              {product.image && (
                <Image
                  src={product.image.imageUrl}
                  alt={`Image of ${product.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={product.image.imageHint}
                />
              )}
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-4">{product.name}</h3>
              <button className="bg-accent text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                <ShoppingBag className="mr-2 h-4 w-4 inline" /> View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
