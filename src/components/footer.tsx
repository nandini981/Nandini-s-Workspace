import { config } from '@/lib/config';
import SocialIcons from './social-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-headline text-2xl font-bold text-primary">
              {config.communityName}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {config.footer.copyright}
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {config.footer.links.map((link) => (
              <Link key={link.title} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link.title}
              </Link>
            ))}
          </nav>
          <div className="mt-4 md:mt-0">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
