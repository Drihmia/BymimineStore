import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    image: ImagePlaceholder | undefined;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  if (!product.image) return null;

  return (
    <Card className="overflow-hidden shadow-lg transition-shadow hover:shadow-xl">
      <CardContent className="p-0">
        <div className="overflow-hidden">
          <Image
            src={product.image.imageUrl}
            alt={product.image.description}
            width={600}
            height={800}
            className="w-full h-auto object-cover aspect-[3/4] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <h3 className="text-lg font-medium w-full text-center">{product.name}</h3>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
