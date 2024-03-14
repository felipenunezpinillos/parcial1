import React, { useState, useEffect } from 'react';

const fetchImages = async (count) => {
  const images = new Array(count).fill(null);
  return images.map(() => `https://picsum.photos/350?random=${Math.random()}`);
};

const ImageGrid = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages(12).then(setImages);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getGridColumnCount = () => {
    if (windowWidth > 800) {
      return 'repeat(4, 1fr)';
    } else if (windowWidth > 500) {
      return 'repeat(3, 1fr)';
    } else {
      return 'repeat(2, 1fr)';
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: getGridColumnCount(), gap: '10px' }}>
      {images.map((src, index) => (
        <img key={index} src={src} alt="Imagen del post" />
      ))}
    </div>
  );
};

export default ImageGrid;
