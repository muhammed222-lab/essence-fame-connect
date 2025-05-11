
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, FileText, User, CustomerService } from 'lucide-react';

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
  return (
    <nav className="bg-essence-black text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold mb-4 md:mb-0 flex items-center">
            <span className="text-essence-orange">Essence</span>
            <span className="text-white">Fame</span>
            <span className="text-essence-orange">Face</span>
          </Link>
          
          <div className="flex flex-wrap justify-center gap-4">
            <NavItem to="/home" icon={Home}>Home</NavItem>
            <NavItem to="/contract" icon={FileText}>Contract</NavItem>
            <NavItem to="/registration" icon={User}>Registration</NavItem>
            <NavItem to="/customer-service" icon={CustomerService}>Customer Service</NavItem>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
