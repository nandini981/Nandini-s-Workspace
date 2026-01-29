import { Instagram, Youtube } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function SocialIcons() {
  const iconStyle = "h-6 w-6 text-muted-foreground hover:text-foreground transition-colors";
  return (
    <div className="flex items-center gap-6">
      <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
        <Youtube className={iconStyle} />
      </a>
      <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
        <Instagram className={iconStyle} />
      </a>
      <a href="#" aria-label="X" target="_blank" rel="noopener noreferrer">
        <XIcon className={iconStyle} fill="currentColor" />
      </a>
    </div>
  );
}
