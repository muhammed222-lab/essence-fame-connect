
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, User, HeadphonesIcon, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const NavItem = ({ to, icon: Icon, children }: NavItemProps) => (
  <Link 
    to={to} 
    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-essence-cream/10 transition-colors"
  >
    <Icon size={20} />
    <span>{children}</span>
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className="bg-essence-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-essence-orange">Essence</span>
            <span className="text-white">Fame</span>
            <span className="text-essence-orange">Face</span>
          </Link>
          
          {isMobile ? (
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md hover:bg-essence-cream/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <div className="flex flex-wrap justify-center gap-4">
              <NavItem to="/home" icon={Home}>Home</NavItem>
              <NavItem to="/contract" icon={FileText}>Contract</NavItem>
              <NavItem to="/registration" icon={User}>Registration</NavItem>
              <NavItem to="/customer-service" icon={HeadphonesIcon}>Customer Service</NavItem>
            </div>
          )}
        </div>
        
        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 animate-fade-in">
            <NavItem to="/home" icon={Home}>Home</NavItem>
            <NavItem to="/contract" icon={FileText}>Contract</NavItem>
            <NavItem to="/registration" icon={User}>Registration</NavItem>
            <NavItem to="/customer-service" icon={HeadphonesIcon}>Customer Service</NavItem>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
