import Image from 'next/image';
import { config } from '@/lib/config';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">
            {config.projects.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {config.projects.items.map((project, index) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={`Project example ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-300"
                      data-ai-hint={projectImage.hint}
                    />
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
