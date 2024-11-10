import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">Mon App</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Produits</Link>
          <Link to="/ventes" className="text-white hover:text-gray-300">Ventes</Link>
          <Link to="/clients" className="text-white hover:text-gray-300">Clients</Link>
        </div>
      </div>
    </nav>
  );
}