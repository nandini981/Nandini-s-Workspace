import Image from 'next/image';
import { config } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            {config.testimonials.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {config.testimonials.items.map((testimonial) => {
            const testimonialImage = PlaceHolderImages.find(p => p.id === testimonial.id);
            return (
              <Card key={testimonial.id} className="flex flex-col">
                <CardContent className="pt-6 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar>
                        {testimonialImage && <AvatarImage src={testimonialImage.imageUrl} alt={testimonial.name} data-ai-hint={testimonialImage.imageHint} />}
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
                    <Badge variant="outline">{testimonial.role}</Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
