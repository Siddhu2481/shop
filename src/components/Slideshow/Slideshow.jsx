import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://example.com/image1.jpg',
    thumbnail: 'https://example.com/thumb1.jpg',
  },
  {
    original: 'https://example.com/image2.jpg',
    thumbnail: 'https://example.com/thumb2.jpg',
  },
  {
    original: 'https://example.com/image3.jpg',
    thumbnail: 'https://example.com/thumb3.jpg',
  },
];

const Slideshow = () => {
  return (
    <ImageGallery items={images} />
  );
};

export default Slideshow;
