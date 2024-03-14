import React from 'react';

const PostDetail = ({ imageUrl }) => {
  return (
    <div>
      {/* Modal con la imagen aquí */}
      <img src={imageUrl} alt="Detalle del Post" />
    </div>
  );
};

export default PostDetail;
