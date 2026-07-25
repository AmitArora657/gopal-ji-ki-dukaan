import styles from "./Heading.module.css";

interface HeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Heading = ({ title, subtitle, className = "" }: HeadingProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>
      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default Heading;
