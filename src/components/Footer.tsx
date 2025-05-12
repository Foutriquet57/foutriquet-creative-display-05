
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-light py-8 mt-16">
      <div className="portfolio-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white">Foutriquet</h3>
            <p className="text-lavender text-sm mt-1">Photographie & Cinématographie</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-white font-medium mb-2">Catégories</h4>
              <ul className="space-y-2">
                <li><Link to="/court-metrage" className="text-lavender hover:text-white text-sm">Court Métrage</Link></li>
                <li><Link to="/photo" className="text-lavender hover:text-white text-sm">Photo</Link></li>
                <li><Link to="/publicite" className="text-lavender hover:text-white text-sm">Publicité</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-2">Contact</h4>
              <ul className="space-y-2">
                <li className="text-lavender text-sm">contact@foutriquet.com</li>
                <li className="text-lavender text-sm">Instagram: @foutriquet</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-lavender">&copy; {currentYear} Foutriquet. Tous droits réservés.</p>
          <div className="mt-4 md:mt-0">
            <Link to="/login" className="text-xs text-lavender hover:text-white">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
