import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Usb } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Usb className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              <span className="text-xl font-bold text-white dark:text-white">ADDICTA TECH</span>

              {/* <span className="text-xl font-bold text-white-900 dark:text-white">AVITS</span> */}
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#products">Pricing</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              {/* <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-white-100 dark:hover:bg-white-800 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-white-600 dark:text-white-300" />
                ) : (
                  <Moon className="w-5 h-5 text-white-600 dark:text-white-300" />
                )}
              </button> */}

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white-600 dark:text-white-300" />
                ) : (
                  <Menu className="w-6 h-6 text-white-600 dark:text-white-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bg-white dark:bg-gray-900 shadow-lg z-40 md:hidden"
          >
            <div className="py-4 px-4 space-y-4">
              <MobileNavLink href="#products" onClick={() => setIsMobileMenuOpen(false)}>
                Products
              </MobileNavLink>
              <MobileNavLink href="#features" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </MobileNavLink>
              <MobileNavLink href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-gray-600 dark:text-white-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
  >
    {children}
  </a>
);

const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    onClick={onClick}
    className="block text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
  >
    {children}
  </a>
);

export default Navbar;