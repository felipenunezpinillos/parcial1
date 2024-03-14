import React, { useState, useEffect } from 'react';
import { fetchUserData } from './mockUserService';
import { Link } from 'react-router-dom';


const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserData().then(data => {
      setUserData(data);
    });
  }, []);

  // Si userData aún no está establecido, muestra un indicador de carga
  if (!userData) {
    return <div>Cargando perfil del usuario...</div>;
  }

  // Renderiza la información del usuario
  return (
    <div className="user-profile">
      <Link to="/profile">
        <img src={`https://picsum.photos/100?random=${userData.username}`} alt={`${userData.fullName}`} className="user-profile-image"/>
      </Link>
      <h2 className="user-name">{userData.username}</h2>
      <p className="user-full-name">{userData.fullName}</p>
      <p className="user-description">{userData.description}</p>
      <a href={userData.websiteUrl} className="user-website">{userData.websiteUrl}</a>
      <div className="user-stats">
        <span>{userData.posts} posts</span>
        <span>{userData.followers} followers</span>
        <span>{userData.following} following</span>
      </div>
    </div>
  );
};

export default UserProfile;
