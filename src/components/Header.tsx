
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-beige shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-deepblue">
              History Explorer
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-deepblue"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-beige shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Timeline", path: "/timeline" },
    { name: "Historical Chat", path: "/historical-chat" },
    { name: "Quiz", path: "/quiz" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.path}
          className="font-medium text-deepblue hover:text-gold transition-colors"
          onClick={onClick}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Header;
