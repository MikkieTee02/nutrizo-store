'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    name: 'Smitha',
    location: 'Cunningham Store',
    quote:
      'Also Like the fact that I can pick my staples in the brown paper packs and glass containers at the zero waste section, with an idea to reduce plastic and also more convenient.',
    avatarImage: PlaceHolderImages.find(p => p.id === 'testimonial-avatar-1'),
  },
  {
    name: 'Sarah L.',
    location: 'Nutrizo Customer',
    quote:
      "Nutrizo has completely changed my snacking habits! The granola bars are my absolute favorite. So tasty and guilt-free.",
    avatarImage: PlaceHolderImages.find(p => p.id === 'team-member-1'),
  },
  {
    name: 'Mike P.',
    location: 'Nutrizo Customer',
    quote:
      "As a fitness enthusiast, I'm picky about what I eat. Nutrizo's products meet all my criteria: clean ingredients, great taste, and convenient.",
    avatarImage: PlaceHolderImages.find(p => p.id === 'team-member-2'),
  },
];

export function Testimonials() {
  const bgImageLeft = PlaceHolderImages.find(p => p.id === 'testimonial-bg-left');
  const bgImageRight = PlaceHolderImages.find(p => p.id === 'testimonial-bg-right');
  
  return (
    <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden">
      {bgImageLeft && (
         <Image 
          src={bgImageLeft.imageUrl}
          alt={bgImageLeft.description}
          width={400}
          height={400}
          className="absolute top-1/2 -translate-y-1/2 -left-32 opacity-50 -z-10"
          data-ai-hint={bgImageLeft.imageHint}
        />
      )}
      {bgImageRight && (
         <Image 
          src={bgImageRight.imageUrl}
          alt={bgImageRight.description}
          width={500}
          height={500}
          className="absolute top-1/2 -translate-y-1/2 -right-48 opacity-60 -z-10"
          data-ai-hint={bgImageRight.imageHint}
        />
      )}
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-2xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              <div className="text-center p-8">
                <Avatar className="w-24 h-24 mx-auto mb-6 border-4 border-white shadow-lg">
                  {testimonial.avatarImage ? (
                    <AvatarImage src={testimonial.avatarImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatarImage.imageHint} className="object-cover" />
                  ) : (
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  )}
                </Avatar>
                <p className="text-lg md:text-xl text-foreground/80 max-w-lg mx-auto mb-4">
                  “{testimonial.quote}”
                </p>
                <div className="flex justify-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-5 h-5" />
                  ))}
                </div>
                <p className="font-semibold text-primary">
                  {testimonial.name}{' '}
                  <span className="font-normal text-muted-foreground">- {testimonial.location}</span>
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80 flex items-center justify-center" />
        <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/80 flex items-center justify-center" />
      </Carousel>
    </section>
  );
}
