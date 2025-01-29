import styles from "./reactions-container.module.css";
import { HearthReaction } from "./reactions/hearth/hearth-reaction";
import { RocketReaction } from "./reactions/rocket/rocket-reaction";
import { ThumbDownReaction } from "./reactions/thumb-down/thumb-down-reaction";
import { ThumbUpReaction } from "./reactions/thumb-up/thumb-up-reaction";
import React from "react";

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
  onClick: (e: React.MouseEvent<HTMLDivElement>, reaction: "thumbUp" | "hearth" | "thumbDown" | "rocket") => void;
}

export const ReactionsContainer = ({
  values,
  onClick,
}: ReactionsContainerProps) => {
  const { thumbUp, hearth, thumbDown, rocket } = values;
  return (
    <div className={styles.root}>
      {thumbUp && <ThumbUpReaction reaction={thumbUp} onClick={(e) => onClick(e, "thumbUp")} />}
      {hearth && <HearthReaction reaction={hearth} onClick={(e) => onClick(e, "hearth")} />}
      {thumbDown && <ThumbDownReaction
        reaction={thumbDown}
        onClick={(e) => onClick(e, "thumbDown")}
      />}
      {rocket && <RocketReaction reaction={rocket} onClick={(e) => onClick(e, "rocket")} />}
    </div>
  );
};
