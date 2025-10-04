import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // nice icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0A192F] text-white shadow-md">
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          {' '}
          <h1 className="text-2xl font-bold text-orange-500">CryptoTracker</h1>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-orange-400">
            Home
          </Link>
          <Link to="/dashboard" className="hover:text-orange-400">
            Dashboard
          </Link>
          <Link to="/transactions" className="hover:text-orange-400">
            Transactions
          </Link>
          <Link to="/settings" className="hover:text-orange-400">
            Settings
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-500">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A192F] px-6 pb-4 animate-slideDown">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-400">
            Home
          </Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-400">
            Dashboard
          </Link>
          <Link to="/transactions" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-400">
            Transactions
          </Link>
          <Link to="/settings" onClick={() => setIsOpen(false)} className="block py-2 hover:text-orange-400">
            Settings
          </Link>
        </div>
      )}
    </nav>
  );
}
