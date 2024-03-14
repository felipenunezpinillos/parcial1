// Profile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    username: '',
    fullName: '',
    description: '',
    websiteUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Editar Perfil</h1>
      <label>
        Nombre de usuario
        <input
          type="text"
          name="username"
          value={profile.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </label>

      <label>
        Nombre completo
        <input
          type="text"
          name="fullName"
          value={profile.fullName}
          onChange={handleChange}
          placeholder="Nombre Completo"
        />
      </label>

      <label>
        Descripción del perfil
        <input
          type="text"
          name="description"
          value={profile.description}
          onChange={handleChange}
          placeholder="Descripción del perfil"
        />
      </label>

      <label>
        URL página personal
        <input
          type="text"
          name="websiteUrl"
          value={profile.websiteUrl}
          onChange={handleChange}
          placeholder="URL página personal"
        />
      </label>

      <button type="submit">Guardar Cambios</button>
    </form>
  );
};

export default Profile;
