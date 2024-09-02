'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
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

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">
          <a href="/">WEKOMKOM</a>
        </div>
        <ul className="flex items-center space-x-6">
          <li><a href="/" className="text-gray-700 hover:text-blue-600">Accueil</a></li>
          <li><a href="/opportunities" className="text-gray-700 hover:text-blue-600">Opportunités</a></li>
          {isLoggedIn ? (
            <>
              <li><a href="/profile" className="text-gray-700 hover:text-blue-600">Mon Profil</a></li>
              <li>
                <button onClick={handleLogout} className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded">
                  Se déconnecter
                </button>
              </li>
            </>
          ) : (
            <>
              <li><a href="/register" className="text-gray-700 hover:text-blue-600">Inscription</a></li>
              <li><a href="/login" className="text-gray-700 hover:text-blue-600">Connexion</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
