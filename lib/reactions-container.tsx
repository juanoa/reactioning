import styles from "./reactions-container.module.css";
import { HearthReaction } from "./reactions/hearth/hearth-reaction";
import { RocketReaction } from "./reactions/rocket/rocket-reaction";
import { ThumbDownReaction } from "./reactions/thumb-down/thumb-down-reaction";
import { ThumbUpReaction } from "./reactions/thumb-up/thumb-up-reaction";
import { useTheme } from "./hooks/useTheme";

export type Reaction = {
  count: number;
  selected?: boolean;
};

export type Reactions = {
  thumbUp?: Reaction;
  hearth?: Reaction;
  thumbDown?: Reaction;
  rocket?: Reaction;
};

export interface ReactionsContainerProps {
  values: Reactions;
  onClick: (reaction: "thumbUp" | "hearth" | "thumbDown" | "rocket") => void;
  theme?: "light" | "dark";
}

export const ReactionsContainer = ({
  values,
  onClick,
  theme: initialTheme,
}: ReactionsContainerProps) => {
  const { thumbUp, hearth, thumbDown, rocket } = values;
  useTheme(initialTheme);

  return (
    <div className={styles.root}>
      {thumbUp && <ThumbUpReaction reaction={thumbUp} onClick={() => onClick("thumbUp")} />}
      {hearth && <HearthReaction reaction={hearth} onClick={() => onClick("hearth")} />}
      {thumbDown && <ThumbDownReaction
        reaction={thumbDown}
        onClick={() => onClick("thumbDown")}
      />}
      {rocket && <RocketReaction reaction={rocket} onClick={() => onClick("rocket")} />}
    </div>
  );
};
