import { useMinistryData } from '../../hooks/useMinistryData';
import LazyImage from '../ui/LazyImage';
import styles from './HeroSection.module.scss';

export default function HeroSection() {
  const { heroContent } = useMinistryData();

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <LazyImage
          src={heroContent.image}
          alt="Ministry gathering"
          className={styles.bgImage}
          sizes="(max-width: 768px) 100vw, 80vw"
          priority
        />
        <div className={styles.content}>
          <h1 data-aos="fade-up">{heroContent.title}</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            {heroContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}