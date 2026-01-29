import Image from 'next/image';
import { config } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ServicesSection() {
  const services = config.services;

  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            {services.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.paths.map((service) => {
            const serviceImage = PlaceHolderImages.find(p => p.id === service.id);
            return (
              <Card key={service.id} className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
                {serviceImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={serviceImage.imageUrl}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={serviceImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
