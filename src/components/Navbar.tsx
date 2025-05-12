
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-navy-light py-4">
      <div className="portfolio-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
            Foutriquet
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link nav-link-active">Accueil</Link>
            <Link to="/court-metrage" className="nav-link">Court Métrage</Link>
            <Link to="/photo" className="nav-link">Photo</Link>
            <Link to="/publicite" className="nav-link">Publicité</Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="border-burgundy text-white hover:bg-burgundy hover:text-white">
                Admin
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="nav-link nav-link-active" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
              <Link to="/court-metrage" className="nav-link" onClick={() => setIsMenuOpen(false)}>Court Métrage</Link>
              <Link to="/photo" className="nav-link" onClick={() => setIsMenuOpen(false)}>Photo</Link>
              <Link to="/publicite" className="nav-link" onClick={() => setIsMenuOpen(false)}>Publicité</Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="border-burgundy text-white hover:bg-burgundy hover:text-white">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
