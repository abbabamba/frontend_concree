// components/Header.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is logged in, e.g., by checking for a token in localStorage
    const token = localStorage.getItem('token');
    const userProfile = localStorage.getItem('user');

    if (token && userProfile) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userProfile)); // Assuming user profile is stored as JSON
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
    <header>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/opportunities">Opportunités</a></li>
          {isLoggedIn ? (
            <>
              <li><a href="/profile">Mon Profil</a></li>
              <li><button onClick={handleLogout}>Se déconnecter</button></li>
              <li><img src="/profile-icon.png" alt="Profile Icon" /></li>
            </>
          ) : (
            <>
              <li><a href="/register">Inscription</a></li>
              <li><a href="/login">Connexion</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
