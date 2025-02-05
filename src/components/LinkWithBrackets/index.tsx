export interface LinkWithBracketsProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export default function LinkWithBrackets({ href, children, className }: LinkWithBracketsProps) {
  return (
    <a
      target="_blank"
      href={href}
      className={`inline-flex gap-1 font-bold hover:underline md:focus:underline ${className}`}>
      <span className="text-green-400">[</span>
      {children}
      <span className="text-green-400">]</span>
    </a>
  );
}
