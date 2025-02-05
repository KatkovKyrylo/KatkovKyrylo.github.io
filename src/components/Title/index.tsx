interface TitleProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export default function Title({ children, variant, className }: TitleProps) {
  const Element = variant;

  const fontSizes = {
    h1: "text-2xl sm:text-3xl md:mb-2 md:text-3xl lg:mb-3 xl:text-4xl xl:mb-5",
    h2: "mb-3 text-2xl sm:text-3xl sm:mb-3 xl:mb-6 xl:text-4xl",
    h3: "text-2xl mb-3 sm:text-1xl xl:text-2xl",
    h4: "text-xl sm:text-2xl",
    h5: "text-xl",
    h6: "text-lg",
  };

  return (
    <Element className={`uppercase font-bold text-green-400 ${fontSizes[variant]} ${className}`}>
      {children}
    </Element>
  );
}
