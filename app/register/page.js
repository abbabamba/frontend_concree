'use client';
import { useState } from 'react';
import { registerUser } from '../../services/api';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    skills: '',
    experiences: [{ title: '', company: '', startDate: '', endDate: '' }],
    education: [{ degree: '', school: '', field: '', startDate: '', endDate: '' }],
    interests: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleArrayChange = (e, index, field, arrayName) => {
    const { value } = e.target;
    setFormData(prevState => {
      const updatedArray = [...prevState[arrayName]];
      updatedArray[index][field] = value;
      return { ...prevState, [arrayName]: updatedArray };
    });
  };

  const handleAddArrayItem = (arrayName) => {
    setFormData(prevState => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], arrayName === 'experiences' ? { title: '', company: '', startDate: '', endDate: '' } : { degree: '', school: '', field: '', startDate: '', endDate: '' }]
    }));
  };

  const handleRemoveArrayItem = (index, arrayName) => {
    setFormData(prevState => {
      const updatedArray = prevState[arrayName].filter((_, i) => i !== index);
      return { ...prevState, [arrayName]: updatedArray };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        ...formData,
        skills: formData.skills.split(',').map(skill => skill.trim()),
        interests: formData.interests.split(',').map(interest => interest.trim()),
        experiences: formData.experiences.map(exp => ({
          title: exp.title.trim(),
          company: exp.company.trim(),
          startDate: exp.startDate ? new Date(exp.startDate) : null,
          endDate: exp.endDate ? new Date(exp.endDate) : null
        })),
        education: formData.education.map(edu => ({
          degree: edu.degree.trim(),
          school: edu.school.trim(),
          field: edu.field.trim(),
          startDate: edu.startDate ? new Date(edu.startDate) : null,
          endDate: edu.endDate ? new Date(edu.endDate) : null
        }))
      };
      
      const response = await registerUser(userData);
      if (response.message === 'User registered successfully') {
        router.push('/login');
      } else {
        setError(response.message || 'Registration failed');
      }
    } catch (err) {
      setError('Registration failed');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Inscription</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700">Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Nom:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Compétences (séparées par des virgules):</label>
            <input type="text" name="skills" value={formData.skills} onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Intérêts (séparés par des virgules):</label>
            <input type="text" name="interests" value={formData.interests} onChange={handleChange}
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <h3 className="text-xl font-semibold mt-6 mb-2">Expériences</h3>
          {formData.experiences.map((exp, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <input type="text" placeholder="Titre" value={exp.title} onChange={(e) => handleArrayChange(e, index, 'title', 'experiences')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="text" placeholder="Entreprise" value={exp.company} onChange={(e) => handleArrayChange(e, index, 'company', 'experiences')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="date" placeholder="Date de début" value={exp.startDate} onChange={(e) => handleArrayChange(e, index, 'startDate', 'experiences')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="date" placeholder="Date de fin" value={exp.endDate} onChange={(e) => handleArrayChange(e, index, 'endDate', 'experiences')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button type="button" onClick={() => handleRemoveArrayItem(index, 'experiences')}
                className="text-red-500 hover:underline">Supprimer</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddArrayItem('experiences')}
            className="w-full text-blue-500 hover:text-blue-700 mb-6">Ajouter une expérience</button>

          <h3 className="text-xl font-semibold mb-2">Éducation</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 pb-4">
              <input type="text" placeholder="Diplôme" value={edu.degree} onChange={(e) => handleArrayChange(e, index, 'degree', 'education')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="text" placeholder="École" value={edu.school} onChange={(e) => handleArrayChange(e, index, 'school', 'education')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="text" placeholder="Domaine" value={edu.field} onChange={(e) => handleArrayChange(e, index, 'field', 'education')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="date" placeholder="Date de début" value={edu.startDate} onChange={(e) => handleArrayChange(e, index, 'startDate', 'education')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <input type="date" placeholder="Date de fin" value={edu.endDate} onChange={(e) => handleArrayChange(e, index, 'endDate', 'education')}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded mb-2 focus:outline-none focus:ring-2 focus:ring-blue-600" />
              <button type="button" onClick={() => handleRemoveArrayItem(index, 'education')}
                className="text-red-500 hover:underline">Supprimer</button>
            </div>
          ))}
          <button type="button" onClick={() => handleAddArrayItem('education')}
            className="w-full text-blue-500 hover:text-blue-700 mb-6">Ajouter une éducation</button>

          <button type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
