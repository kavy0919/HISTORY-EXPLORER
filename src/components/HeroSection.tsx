
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
  children,
}: HeroSectionProps) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundColor: "#2E4057" };

  return (
    <div
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={bgStyle}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className="inline-block bg-gold hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-lg"
        >
          {buttonText}
        </Link>
        {children}
      </div>
    </div>
  );
};

export default HeroSection;
