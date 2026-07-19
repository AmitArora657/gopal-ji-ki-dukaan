import styles from "./Heading.module.css";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default Heading;
