import { Mail, Linkedin, Github } from 'lucide-react';

export default function SocialIcons() {
  const iconStyle = "h-6 w-6 text-muted-foreground hover:text-foreground transition-colors";
  return (
    <div className="flex items-center gap-6">
      <a href="mailto:nandinisaini170@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
        <Mail className={iconStyle} />
      </a>
      <a href="https://www.linkedin.com/in/nandinisaini98/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
        <Linkedin className={iconStyle} />
      </a>
      <a href="https://github.com/nandini981/" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
        <Github className={iconStyle} />
      </a>
    </div>
  );
}
