
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  link: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, description, link, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in">
      <div className="p-6">
        <div className="flex justify-center mb-4 text-gold transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-playfair font-bold text-deepblue mb-2 transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={link}
          className="inline-block bg-gold hover:bg-amber-600 text-white font-medium py-2 px-4 rounded transition-all duration-300 hover:shadow-md"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;
