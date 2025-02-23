import { useRef } from 'react';
import { useLazyLoad } from '../../hooks/useLazyLoad';
import styles from './LazyImage.module.scss';

export default function LazyImage({ src, alt, sizes, className, priority }) {
  const imgRef = useRef();
  useLazyLoad(imgRef);

  return (
    <picture className={`${styles.imageWrapper} ${className}`}>
      <source
        srcSet={`${src}?webp`}
        type="image/webp"
      />
      <source
        srcSet={src}
        type="image/jpeg"
      />
      <img
        ref={imgRef}
        src={priority ? src : '/placeholder.jpg'}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={styles.image}
        sizes={sizes}
      />
    </picture>
  );
}