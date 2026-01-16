'use client';

import { useLanguage } from '@/hooks/use-language';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Heart, Shirt, Smartphone } from 'lucide-react';
import ProductCard from './product-card';
import { Button } from './ui/button';

const ProductGallery = () => {
  const { translations } = useLanguage();

  const products = {
    clothing: [
      { id: 'p1', name: translations.gallery.cardigan, image: PlaceHolderImages.find(img => img.id === 'cardigan') },
      { id: 'p2', name: translations.gallery.adultKidWear, image: PlaceHolderImages.find(img => img.id === 'adult-wear') },
    ],
    baby: [
      { id: 'p3', name: translations.gallery.babySets, image: PlaceHolderImages.find(img => img.id === 'baby-set-1') },
      { id: 'p4', name: translations.gallery.babySets, image: PlaceHolderImages.find(img => img.id === 'baby-set-2') },
    ],
    accessories: [
      { id: 'p5', name: translations.gallery.toteBag, image: PlaceHolderImages.find(img => img.id === 'tote-bag') },
      { id: 'p6', name: translations.gallery.smallBag, image: PlaceHolderImages.find(img => img.id === 'small-bag') },
      { id: 'p7', name: translations.gallery.phonePouch, image: PlaceHolderImages.find(img => img.id === 'phone-pouch') },
    ],
  };

  const categories = [
    { id: 'clothing', title: translations.gallery.clothing, icon: <Shirt className="w-8 h-8 text-primary-foreground" />, data: products.clothing },
    { id: 'baby', title: translations.gallery.baby, icon: <Heart className="w-8 h-8 text-primary-foreground" />, data: products.baby },
    { id: 'accessories', title: translations.gallery.accessories, icon: <Smartphone className="w-8 h-8 text-primary-foreground" />, data: products.accessories },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            {translations.gallery.headline}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {translations.gallery.subheadline}
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id}>
              <div className="flex items-center gap-4 mb-8">
                 <div className="bg-primary p-3 rounded-full">
                    {category.icon}
                 </div>
                <h3 className="text-3xl font-headline font-semibold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                {category.data.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/80 text-accent-foreground">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    {translations.gallery.cta}
                </a>
            </Button>
        </div>

      </div>
    </section>
  );
};

export default ProductGallery;
