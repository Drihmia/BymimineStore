'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useLanguage } from '@/hooks/use-language';

const HeroSection = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');
  const { translations } = useLanguage();

  return (
    <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-tight text-shadow-lg">
          {translations.hero.title}
        </h1>
        <p className="mt-4 text-lg md:text-xl font-headline text-shadow">
          {translations.slogan}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
