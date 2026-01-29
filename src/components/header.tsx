import Link from 'next/link';
import { config } from '@/lib/config';

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav className="rounded-full border border-white/10 bg-black/70 backdrop-blur-sm px-8 py-3">
        <ul className="flex items-center gap-x-8">
          {config.header.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
