import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, FileText, User, HeadphonesIcon, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion } from "framer-motion";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const NavItem = ({ to, icon: Icon, children }: NavItemProps) => (
  <Link
    to={to}
    className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-essence-cream/10 transition-colors group"
  >
    <motion.div whileHover={{ scale: 1.1 }}>
      <Icon
        size={20}
        className="group-hover:text-essence-orange transition-colors"
      />
    </motion.div>
    <span className="group-hover:text-essence-orange transition-colors">
      {children}
    </span>
  </Link>
);

const Logo = () => (
  <motion.div
    className="flex items-center"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.img
      src="/favicon.png"
      alt="EssenceFameFace Logo"
      className="w-8 h-8 mr-2"
      animate={{
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
    <motion.div className="text-2xl font-bold flex items-center">
      <span className="text-essence-orange">Essence</span>
      <span className="text-white">Fame</span>
      <span className="text-essence-orange">Face</span>
    </motion.div>
  </motion.div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-essence-black text-white p-4 sticky top-0 z-50 shadow-lg border-b border-essence-orange/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>

        {isMobile ? (
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-essence-cream/10"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        ) : (
          <div className="flex gap-1 bg-essence-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-essence-orange/20">
            <NavItem to="/home" icon={Home}>
              Home
            </NavItem>
            <NavItem to="/contract" icon={FileText}>
              Contract
            </NavItem>
            <NavItem to="/registration" icon={User}>
              Registration
            </NavItem>
            <NavItem to="/customer-service" icon={HeadphonesIcon}>
              Support
            </NavItem>
          </div>
        )}

        {/* Mobile menu */}
        {isMobile && isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-essence-black/95 backdrop-blur-md p-4 shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              <NavItem to="/home" icon={Home}>
                Home
              </NavItem>
              <NavItem to="/contract" icon={FileText}>
                Contract
              </NavItem>
              <NavItem to="/registration" icon={User}>
                Registration
              </NavItem>
              <NavItem to="/customer-service" icon={HeadphonesIcon}>
                Customer Support
              </NavItem>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
