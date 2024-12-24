import styles from './HeroSection.module.css';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}
