import Image from 'next/image';
import { config } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function LearningPaths() {
  return (
    <section id="learning-paths" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            {config.learningPaths.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.learningPaths.paths.map((path) => {
            const pathImage = PlaceHolderImages.find(p => p.id === path.id);
            return (
              <Card key={path.id} className="group overflow-hidden flex flex-col hover:border-primary/50 transition-colors">
                {pathImage && (
                  <div className="overflow-hidden">
                    <Image
                      src={pathImage.imageUrl}
                      alt={path.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2] group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={pathImage.imageHint}
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-headline">{path.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription>{path.description}</CardDescription>
                  <div className="mt-4">
                    <span className="flex items-center text-sm font-semibold text-primary">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
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
