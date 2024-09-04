'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Menu, User, LogOut } from 'lucide-react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userProfile = localStorage.getItem('user');
    if (token && userProfile) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userProfile));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    router.push('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight hover:text-blue-200 transition duration-300">
            WEKOMKOM
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Accueil</NavLink>
            <NavLink href="/opportunities">Opportunités</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink href="/profile">Mon Profil</NavLink>
                <button
                  onClick={handleLogout}
                  className="flex items-center bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-300"
                >
                  <LogOut size={18} className="mr-2" />
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <NavLink href="/register">Inscription</NavLink>
                <NavLink href="/login">Connexion</NavLink>
              </>
            )}
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <NavLink href="/" mobile>Accueil</NavLink>
            <NavLink href="/opportunities" mobile>Opportunités</NavLink>
            {isLoggedIn ? (
              <>
                <NavLink href="/profile" mobile>Mon Profil</NavLink>
                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center text-red-300 hover:text-red-100 py-2 transition duration-300"
                >
                  <LogOut size={18} className="mr-2" />
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <NavLink href="/register" mobile>Inscription</NavLink>
                <NavLink href="/login" mobile>Connexion</NavLink>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

const NavLink = ({ href, children, mobile }) => (
  <Link
    href={href}
    className={`${
      mobile
        ? 'block py-2 text-blue-200 hover:text-white transition duration-300'
        : 'text-blue-100 hover:text-white transition duration-300'
    }`}
  >
    {children}
  </Link>
);