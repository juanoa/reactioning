import styles from "./reaction-container.module.css";

interface Props {
  children: React.ReactNode;
  count: number;
}

export const ReactionContainer = ({ children, count }: Props) => {
  return (
    <div className={styles.root} aria-details="reaction-container">
      {children}
      <span>{count}</span>
    </div>
  );
};
