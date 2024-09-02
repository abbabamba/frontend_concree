export const getOpportunities = async (filter = {}, sortBy = 'date') => {
    try {
      const queryParams = new URLSearchParams({
        ...filter,
        sortBy,
      });
      console.log('Fetching opportunities with params:', queryParams.toString());
      const response = await fetch(`http://localhost:3001/opportunities?${queryParams}`);
      console.log('Response status:', response.status);
      if (!response.ok) {
        throw new Error(`Failed to fetch opportunities: ${response.status}`);
      }
      const data = await response.json();
      console.log('Opportunities data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching opportunities:', error);
      return [];
    }
  };
  
  export async function getOpportunityDetails(id) {
    try {
      const res = await fetch(`http://localhost:3001/opportunities/${id}`);
      if (!res.ok) {
        throw new Error('Failed to fetch opportunity details');
      }
      return await res.json();
    } catch (error) {
      console.error('Error fetching opportunity details:', error);
      throw error;
    }
  }

  
  // Inscription utilisateur
  export async function registerUser(userData) {
    try {
      const res = await fetch('http://localhost:3001/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Failed to register: ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error('Error during registration:', error);
      throw error;
    }
  }
  
  // Connexion utilisateur
  export async function loginUser(email, password) {
    console.log('Données envoyées:', { email, password });  // Affiche les données envoyées
  
    try {
      const res = await fetch('http://localhost:3001/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const responseText = await res.text(); // Capture la réponse brute
      console.log('Response:', responseText); // Affiche la réponse brute
  
      if (!res.ok) {
        throw new Error(`Failed to login: ${res.statusText}`);
      }
  
      return JSON.parse(responseText); // Parse la réponse JSON manuellement
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  }
  
  

// services/api.js

export async function getUserProfile(userId) {
    try {
      const res = await fetch(`http://localhost:3001/users/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!res.ok) {
        throw new Error(`Failed to fetch user profile: ${res.statusText}`);
      }
  
      const data = await res.json();
      return data.user;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      throw error;
    }
  }
  
  export async function updateUserProfile(userId, updatedData) {
    try {
      const res = await fetch(`http://localhost:3001/users/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
  
      if (!res.ok) {
        throw new Error(`Failed to update user profile: ${res.statusText}`);
      }
  
      const data = await res.json();
      return data.user;
    } catch (error) {
      console.error('Error updating user profile:', error);
      throw error;
    }
  }
  // Postuler pour une opportunité
// Postuler pour une opportunité
export async function applyForOpportunity(opportunityId) {
    try {
        const user = JSON.parse(localStorage.getItem('user')); // Récupérez les informations de l'utilisateur depuis le localStorage

        if (!user) {
            throw new Error('Utilisateur non connecté');
        }

        const response = await fetch(`http://localhost:3001/opportunities/${opportunityId}/apply`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id, // L'ID de l'utilisateur doit être inclus dans le body
            }),
        });

        if (!response.ok) {
            throw new Error('Échec de la candidature');
        }

        return await response.json();
    } catch (error) {
        console.error('Erreur lors de la candidature pour l\'opportunité:', error);
        throw error;
    }
}

  