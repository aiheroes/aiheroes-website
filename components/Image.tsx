import React, { useState, type ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'loaded' : ''}`}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
};
