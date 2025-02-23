import { useMinistryData } from '../../hooks/useMinistryData';
import LazyImage from '../ui/LazyImage';
import styles from './HeroSection.module.scss';
import heroBg from '/images/hero-bg.jpg';

export default function HeroSection() {
  const { heroContent } = useMinistryData();

  return (
    <section className={styles.hero}>
      <div className="hero-content">
        <h1>Welcome to Frank Cooper Ministries</h1>
        <p>Spreading Faith, Hope, and Love</p>
      </div>
    </section>
  );
}