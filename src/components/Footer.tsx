
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deepblue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; 2025 xAI</p>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/about" className="text-sm hover:text-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm hover:text-gold transition-colors">
              Contact
            </Link>
          </div>

          <a
            href="mailto:support@historyexplorer.com"
            className="flex items-center text-white bg-gold hover:bg-opacity-90 px-4 py-2 rounded transition-colors"
          >
            <Mail size={16} className="mr-2" />
            <span>Report Issue</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
