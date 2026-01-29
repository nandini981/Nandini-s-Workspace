import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { config } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-portrait');

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {config.about.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {config.about.description}
            </p>
            <ul className="space-y-4">
              {config.about.learnItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden border-2 border-primary/20">
              <CardContent className="p-0">
                {aboutImage && (
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={800}
                    height={800}
                    className="w-full h-auto object-cover aspect-square"
                    data-ai-hint={aboutImage.imageHint}
                  />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
