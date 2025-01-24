import styles from "./reactions-container.module.css";
import { HearthReaction } from "./reactions/hearth/hearth-reaction";
import { RocketReaction } from "./reactions/rocket/rocket-reaction";
import { ThumbDownReaction } from "./reactions/thumb-down/thumb-down-reaction";
import { ThumbUpReaction } from "./reactions/thumb-up/thumb-up-reaction";

export type Reaction = {
  count: number;
  selected?: boolean;
};

export type Reactions = {
  thumbUp: Reaction;
  hearth: Reaction;
  thumbDown: Reaction;
  rocket: Reaction;
};

export interface ReactionsContainerProps {
  values: Reactions;
  onClick: (reaction: "thumbUp" | "hearth" | "thumbDown" | "rocket") => void;
}

export const ReactionsContainer = ({
  values,
  onClick,
}: ReactionsContainerProps) => {
  const { thumbUp, hearth, thumbDown, rocket } = values;
  return (
    <div className={styles.root}>
      <ThumbUpReaction reaction={thumbUp} onClick={() => onClick("thumbUp")} />
      <HearthReaction reaction={hearth} onClick={() => onClick("hearth")} />
      <ThumbDownReaction
        reaction={thumbDown}
        onClick={() => onClick("thumbDown")}
      />
      <RocketReaction reaction={rocket} onClick={() => onClick("rocket")} />
    </div>
  );
};
