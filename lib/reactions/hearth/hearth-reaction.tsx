import { ReactionContainer } from "../reaction-container";
import { HearthIcon } from "./hearth-icon";
import styles from "./hearth-reaction.module.css";

interface Props {
  count: number;
}

export const HearthReaction = ({ count }: Props) => {
  return (
    <ReactionContainer count={count}>
      <HearthIcon className={styles.icon} />
    </ReactionContainer>
  );
};
