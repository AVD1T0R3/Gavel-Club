import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Logo';

export function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/meetings', label: 'Meetings' },
    { path: '/blogs', label: 'Blogs' },
    { path: '/cabinets', label: 'Cabinets' },
    { path: '/constitution', label: 'Constitution' },
    { path: '/roles', label: 'Roles' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-[#692528] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3">
            <img
                src="Public/Icons/logo.png"
                class="w-15 h-auto"
                alt="Kyu_Gavel_Logo"
              />
            <span className="text-xl font-bold">Gavel Club of Kyambogo</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="p-2 hover:bg-[#8a3033] rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Slide-out Menu */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-[#692528] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="py-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-6 py-3 transition-colors ${
                location.pathname === item.path
                  ? 'bg-[#FAD45F] text-[#692528] border-l-4 border-[#692528]'
                  : 'hover:bg-[#8a3033] border-l-4 border-transparent'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 top-16 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
