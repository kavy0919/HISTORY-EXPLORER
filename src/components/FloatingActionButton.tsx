
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface FloatingActionButtonProps {
  to: string;
  children: ReactNode;
}

const FloatingActionButton = ({ to, children }: FloatingActionButtonProps) => {
  return (
    <Link
      to={to}
      className="fixed bottom-8 right-8 bg-gold hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center justify-center transition-colors z-50"
    >
      {children}
    </Link>
  );
};

export default FloatingActionButton;
