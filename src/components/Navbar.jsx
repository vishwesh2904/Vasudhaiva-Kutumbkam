import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 flex justify-between items-center">
    <Link to="/">
      <img src="/logo.png" alt="Logo" className="w-12 h-12" />
    </Link>
    <div className="space-x-4">
      <Link to="/" className="text-orange-800 font-semibold">Home</Link>
      <Link to="/about" className="text-orange-800 font-semibold">About</Link>
      <Link to="/contact" className="text-orange-800 font-semibold">Contact</Link>
      <Link to="/donate" className="text-orange-800 font-semibold">Donate</Link>
    </div>
  </nav>
);

export default Navbar;
