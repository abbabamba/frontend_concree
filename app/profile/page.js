'use client';

import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/api';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.id) {
          const userProfile = await getUserProfile(storedUser.id);
          setUser(userProfile);
          setEditedUser(userProfile);
        } else {
          setError('Informations utilisateur non trouv&eacute;es');
        }
      } catch (error) {
        setError('Impossible de r&eacute;cup&eacute;rer le profil: ' + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);
    try {
      if (!validateUserData(editedUser)) {
        throw new Error('Données invalides. Veuillez vérifier tous les champs.');
      }
  
      const updatePayload = {
        name: editedUser.name,
        email: editedUser.email,
        password: editedUser.password, // si vous mettez à jour le mot de passe
        skills: editedUser.skills.map(skill => ({ name: skill.name })),
        experiences: editedUser.experiences.map(exp => ({
          title: exp.title,
          company: exp.company,
          startDate: exp.startDate,
          endDate: exp.endDate,
        })),
        education: editedUser.education.map(edu => ({
          degree: edu.degree,
          school: edu.school,
          field: edu.field,
          startDate: edu.startDate,
          endDate: edu.endDate,
        })),
        interests: editedUser.interests.map(interest => ({
          name: interest.name,
        })),
      };
  
      const updatedUser = await updateUserProfile(user.id, updatePayload);
      setUser(updatedUser);
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      setError('Erreur lors de la mise à jour du profil : ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };
  

  const validateUserData = (data) => {
    if (!data.name || !data.email) return false;
    if (!data.email.includes('@')) return false;
    return true;
  };

  const handleChange = (e, field, subfield = null) => {
    if (subfield) {
      setEditedUser({
        ...editedUser,
        [field]: editedUser[field].map(item =>
          item.id === subfield ? { ...item, [e.target.name]: e.target.value } : item
        )
      });
    } else {
      setEditedUser({ ...editedUser, [field]: e.target.value });
    }
  };

  const handleAddItem = (field) => {
    setEditedUser({
      ...editedUser,
      [field]: [...editedUser[field], { id: Date.now(), name: '' }]
    });
  };

  const handleRemoveItem = (field, id) => {
    setEditedUser({
      ...editedUser,
      [field]: editedUser[field].filter(item => item.id !== id)
    });
  };

  if (isLoading) return <div className="text-center mt-4">Chargement...</div>;
  if (error) return <div className="text-red-500 text-center mt-4">Erreur : {error}</div>;
  if (!user) return <div className="text-center mt-4">Aucun utilisateur trouv&eacute;</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Profil Utilisateur</h1>
      {isEditing ? (
        <div className="space-y-4">
          {/* Champ pour nom */}
          <div>
            <label className="block text-gray-700">Nom:</label>
            <input
              name="name"
              value={editedUser.name}
              onChange={(e) => handleChange(e, 'name')}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {/* Champ pour email */}
          <div>
            <label className="block text-gray-700">Email:</label>
            <input
              name="email"
              value={editedUser.email}
              onChange={(e) => handleChange(e, 'email')}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {/* Section pour comp&eacute;tences */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Comp&eacute;tences:</h2>
          {editedUser.skills.map(skill => (
            <div key={skill.id} className="flex items-center space-x-2 mt-2">
              <input
                name="name"
                value={skill.name}
                onChange={(e) => handleChange(e, 'skills', skill.id)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleRemoveItem('skills', skill.id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            onClick={() => handleAddItem('skills')}
            className="mt-3 text-blue-500 hover:text-blue-700"
          >
            Ajouter une comp&eacute;tence
          </button>

          {/* Section pour exp&eacute;riences professionnelles */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Exp&eacute;riences professionnelles:</h2>
          {editedUser.experiences.map(exp => (
            <div key={exp.id} className="space-y-2 mt-2">
              <input
                name="title"
                value={exp.title}
                onChange={(e) => handleChange(e, 'experiences', exp.id)}
                placeholder="Titre"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(e, 'experiences', exp.id)}
                placeholder="Entreprise"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleRemoveItem('experiences', exp.id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            onClick={() => handleAddItem('experiences')}
            className="mt-3 text-blue-500 hover:text-blue-700"
          >
            Ajouter une exp&eacute;rience
          </button>

          {/* Section pour formations professionnelles */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Formations professionnelles:</h2>
          {editedUser.education.map(edu => (
            <div key={edu.id} className="space-y-2 mt-2">
              <input
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, 'education', edu.id)}
                placeholder="Dipl&ocirc;me"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <input
                name="school"
                value={edu.school}
                onChange={(e) => handleChange(e, 'education', edu.id)}
                placeholder="&Eacute;cole"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleRemoveItem('education', edu.id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            onClick={() => handleAddItem('education')}
            className="mt-3 text-blue-500 hover:text-blue-700"
          >
            Ajouter une formation
          </button>

          {/* Section pour centres d&apos;int&eacute;r&ecirc;t */}
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Centres d&apos;int&eacute;r&ecirc;t:</h2>
          {editedUser.interests.map(interest => (
            <div key={interest.id} className="flex items-center space-x-2 mt-2">
              <input
                name="name"
                value={interest.name}
                onChange={(e) => handleChange(e, 'interests', interest.id)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={() => handleRemoveItem('interests', interest.id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
          <button
            onClick={() => handleAddItem('interests')}
            className="mt-3 text-blue-500 hover:text-blue-700"
          >
            Ajouter un centre d&apos;int&eacute;r&ecirc;t
          </button>

          <button
            onClick={handleSave}
            disabled={isLoading}
            className={`mt-6 w-full py-2 text-white ${isLoading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} rounded-md focus:outline-none focus:ring-2 focus:ring-green-600`}
          >
            {isLoading ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </div>
      ) : (
        <div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Nom:</h2>
            <p>{user.name}</p>
          </div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Email:</h2>
            <p>{user.email}</p>
          </div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Comp&eacute;tences:</h2>
            <ul className="list-disc pl-5">
              {user.skills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Exp&eacute;riences professionnelles:</h2>
            <ul className="list-disc pl-5">
              {user.experiences.map(exp => (
                <li key={exp.id}>{exp.title} chez {exp.company}</li>
              ))}
            </ul>
          </div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Formations professionnelles:</h2>
            <ul className="list-disc pl-5">
              {user.education.map(edu => (
                <li key={edu.id}>{edu.degree} &agrave; {edu.school}</li>
              ))}
            </ul>
          </div>
          <div className="text-gray-700 mb-6">
            <h2 className="text-2xl font-semibold">Centres d&apos;int&eacute;r&ecirc;t:</h2>
            <ul className="list-disc pl-5">
              {user.interests.map(interest => (
                <li key={interest.id}>{interest.name}</li>
              ))}
            </ul>
          </div>
          <button
           
            className="mt-6 w-full py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            Modifier le profil
          </button>
        </div>
      )}
    </div>
  );
}
