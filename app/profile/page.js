'use client';
import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../../services/api';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.id) {
          const userProfile = await getUserProfile(storedUser.id);
          setUser(userProfile);
          setEditedUser(userProfile);
        } else {
          setError("Informations utilisateur non trouvées");
        }
      } catch (error) {
        setError("Impossible de récupérer le profil");
      }
    };
    fetchUserProfile();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedUser = await updateUserProfile(user.id, editedUser);
      setUser(updatedUser);
      setIsEditing(false);
      localStorage.setItem('user', JSON.stringify(updatedUser));
    } catch (error) {
      setError("Une erreur interne s'est produite. Veuillez réessayer plus tard.");
    }
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

  if (error) return <div>Erreur : {error}</div>;
  if (!user) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Profil Utilisateur</h1>
      {isEditing ? (
        <>
          <div>
            <label>Nom:</label>
            <input
              name="name"
              value={editedUser.name}
              onChange={(e) => handleChange(e, 'name')}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              name="email"
              value={editedUser.email}
              onChange={(e) => handleChange(e, 'email')}
            />
          </div>
          <h2>Compétences:</h2>
          {editedUser.skills.map(skill => (
            <div key={skill.id}>
              <input
                name="name"
                value={skill.name}
                onChange={(e) => handleChange(e, 'skills', skill.id)}
              />
              <button onClick={() => handleRemoveItem('skills', skill.id)}>Supprimer</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('skills')}>Ajouter une compétence</button>

          <h2>Expériences professionnelles:</h2>
          {editedUser.experiences.map(exp => (
            <div key={exp.id}>
              <input
                name="title"
                value={exp.title}
                onChange={(e) => handleChange(e, 'experiences', exp.id)}
                placeholder="Titre"
              />
              <input
                name="company"
                value={exp.company}
                onChange={(e) => handleChange(e, 'experiences', exp.id)}
                placeholder="Entreprise"
              />
              <button onClick={() => handleRemoveItem('experiences', exp.id)}>Supprimer</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('experiences')}>Ajouter une expérience</button>

          <h2>Formations professionnelles:</h2>
          {editedUser.education.map(edu => (
            <div key={edu.id}>
              <input
                name="degree"
                value={edu.degree}
                onChange={(e) => handleChange(e, 'education', edu.id)}
                placeholder="Diplôme"
              />
              <input
                name="school"
                value={edu.school}
                onChange={(e) => handleChange(e, 'education', edu.id)}
                placeholder="École"
              />
              <button onClick={() => handleRemoveItem('education', edu.id)}>Supprimer</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('education')}>Ajouter une formation</button>

          <h2>Centres d'intérêt:</h2>
          {editedUser.interests.map(interest => (
            <div key={interest.id}>
              <input
                name="name"
                value={interest.name}
                onChange={(e) => handleChange(e, 'interests', interest.id)}
              />
              <button onClick={() => handleRemoveItem('interests', interest.id)}>Supprimer</button>
            </div>
          ))}
          <button onClick={() => handleAddItem('interests')}>Ajouter un centre d'intérêt</button>

          <button onClick={handleSave}>Enregistrer</button>
        </>
      ) : (
        <>
          <p>Nom : {user.name}</p>
          <p>Email : {user.email}</p>
          <h2>Compétences:</h2>
          <ul>
            {user.skills.map(skill => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
          <h2>Expériences professionnelles:</h2>
          <ul>
            {user.experiences.map(exp => (
              <li key={exp.id}>{exp.title} - {exp.company}</li>
            ))}
          </ul>
          <h2>Formations professionnelles:</h2>
          <ul>
            {user.education.map(edu => (
              <li key={edu.id}>{edu.degree} - {edu.school}</li>
            ))}
          </ul>
          <h2>Centres d'intérêt:</h2>
          <ul>
            {user.interests.map(interest => (
              <li key={interest.id}>{interest.name}</li>
            ))}
          </ul>
          <button onClick={handleEdit}>Modifier</button>
        </>
      )}
    </div>
  );
}
