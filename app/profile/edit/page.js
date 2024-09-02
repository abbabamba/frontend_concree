// app/profile/edit/page.js
'use client';

import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../../services/api';
import { useRouter } from 'next/navigation';

export default function EditProfilePage() {
  const [profile, setProfile] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.id) {
      router.push('/login'); // Redirection si l'utilisateur n'est pas connecté
      return;
    }

    async function fetchProfile() {
      try {
        const data = await getUserProfile(user.id);
        if (data) {
          setProfile(data.user);
        } else {
          setError('Could not fetch profile.');
        }
      } catch (err) {
        setError('Failed to load profile.');
      }
    }

    fetchProfile();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      const data = await updateUserProfile(user.id, profile);
      setSuccess('Profile updated successfully!');
      setError(null);
    } catch (err) {
      setError('Failed to update profile.');
      setSuccess(null);
    }
  };

  return (
    <div>
      <h1>Modifier Profil</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            required
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            value={profile.password}
            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  );
}
