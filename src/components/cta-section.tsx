import { config } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter max-w-3xl mx-auto">
          {config.cta.title}
        </h2>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" className="font-semibold">
            {config.cta.primaryButton}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="font-semibold">
            {config.cta.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  );
}
