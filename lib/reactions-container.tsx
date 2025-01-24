import styles from "./reactions-container.module.css";
import { HearthReaction } from "./reactions/hearth/hearth-reaction";
import { RocketReaction } from "./reactions/rocket/rocket-reaction";
import { ThumbDownReaction } from "./reactions/thumb-down/thumb-down-reaction";
import { ThumbUpReaction } from "./reactions/thumb-up/thumb-up-reaction";

export const ReactionsContainer = () => {
  return (
    <div className={styles.root}>
      <ThumbUpReaction count={43} />
      <HearthReaction count={11} />
      <ThumbDownReaction count={7} />
      <RocketReaction count={16} />
    </div>
  );
};
