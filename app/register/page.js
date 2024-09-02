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
    <div>
      <h1>Register</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Skills (comma separated):</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
        </div>
        <div>
          <label>Interests (comma separated):</label>
          <input type="text" name="interests" value={formData.interests} onChange={handleChange} />
        </div>
        
        <h3>Experiences</h3>
        {formData.experiences.map((exp, index) => (
          <div key={index}>
            <input type="text" placeholder="Title" value={exp.title} onChange={(e) => handleArrayChange(e, index, 'title', 'experiences')} />
            <input type="text" placeholder="Company" value={exp.company} onChange={(e) => handleArrayChange(e, index, 'company', 'experiences')} />
            <input type="date" placeholder="Start Date" value={exp.startDate} onChange={(e) => handleArrayChange(e, index, 'startDate', 'experiences')} />
            <input type="date" placeholder="End Date" value={exp.endDate} onChange={(e) => handleArrayChange(e, index, 'endDate', 'experiences')} />
            <button type="button" onClick={() => handleRemoveArrayItem(index, 'experiences')}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem('experiences')}>Add Experience</button>

        <h3>Education</h3>
        {formData.education.map((edu, index) => (
          <div key={index}>
            <input type="text" placeholder="Degree" value={edu.degree} onChange={(e) => handleArrayChange(e, index, 'degree', 'education')} />
            <input type="text" placeholder="School" value={edu.school} onChange={(e) => handleArrayChange(e, index, 'school', 'education')} />
            <input type="text" placeholder="Field" value={edu.field} onChange={(e) => handleArrayChange(e, index, 'field', 'education')} />
            <input type="date" placeholder="Start Date" value={edu.startDate} onChange={(e) => handleArrayChange(e, index, 'startDate', 'education')} />
            <input type="date" placeholder="End Date" value={edu.endDate} onChange={(e) => handleArrayChange(e, index, 'endDate', 'education')} />
            <button type="button" onClick={() => handleRemoveArrayItem(index, 'education')}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={() => handleAddArrayItem('education')}>Add Education</button>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
