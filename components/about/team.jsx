import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SectionHeader } from './section-header';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const teamMembers = [
  {
    name: 'Mikaela Nyamasoka',
    title: 'Founder & CEO',
    bio: 'Jane started Nutrizo with a passion for healthy living and a dream to make nutritious food available to everyone.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-1'),
  },
  {
    name: 'John Smith',
    title: 'Head of Nutrition',
    bio: 'A certified nutritionist, John ensures every Nutrizo product is packed with goodness and scientifically backed.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-2'),
  },
  {
    name: 'Emily White',
    title: 'Chief of Operations',
    bio: 'Emily keeps the wheels turning, managing our sustainable sourcing and eco-friendly packaging initiatives.',
    image: PlaceHolderImages.find(p => p.id === 'team-member-3'),
  },
];

export function OurTeam() {
  return (
    <section id="team">
      <SectionHeader title="Meet Our Team" subtitle="The passionate people behind Nutrizo." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white rounded-lg shadow-md">
            {member.image && (
              <div className="relative h-64 w-full">
                <Image
                  src={member.image.imageUrl}
                  alt={`Photo of ${member.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  data-ai-hint={member.image.imageHint}
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.title}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              <button className="text-muted-foreground hover:text-accent" aria-label={`${member.name}'s LinkedIn profile`}>
                <Linkedin />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
