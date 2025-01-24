import { ReactionContainer } from "../reaction-container";
import { HearthIcon } from "./hearth-icon";
import { Reaction } from "../../reactions-container";
import styles from "./hearth-reaction.module.css";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const HearthReaction = ({ reaction, onClick }: Props) => {
  return (
    <ReactionContainer reaction={reaction} onClick={onClick}>
      <HearthIcon className={styles.icon} />
    </ReactionContainer>
  );
};
