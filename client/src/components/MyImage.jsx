// frontend/src/components/MyImage.jsx

import React from 'react';
import { Image } from 'semantic-ui-react';

const MyImage = ({ src, alt = 'Default Alt Text' }) => (
  <Image src={src} alt={alt} />
);

export default MyImage;
