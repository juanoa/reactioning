import { ReactionContainer } from "../reaction-container";
import { HearthIcon } from "./hearth-icon";
import { Reaction } from "../../reactions-container";
import styles from "./hearth-reaction.module.css";
import React from "react";

interface Props  extends React.HTMLProps<HTMLDivElement> {
  reaction: Reaction;
}

export const HearthReaction = ({ reaction, onClick, ...props }: Props) => {
  return (
    <ReactionContainer reaction={reaction} onClick={onClick} {...props}>
      <HearthIcon className={styles.icon} />
    </ReactionContainer>
  );
};
