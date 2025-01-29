import React, { useState } from "react";
import { ReactionContainer } from "../reaction-container";
import { ThumbDownIcon } from "./thumb-down-icon";
import { Reaction } from "../../reactions-container";
import styles from "./thumb-down-reaction.module.css";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reaction: Reaction;
}

export const ThumbDownReaction = ({ reaction, onClick, ...props }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    if (reaction.selected) return;

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <ReactionContainer reaction={reaction} onClick={handleClick} {...props}>
      <ThumbDownIcon
        className={`${styles.icon} ${isClicked ? styles.animate : ""}`}
      />
    </ReactionContainer>
  );
};
