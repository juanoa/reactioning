import React, { useState } from "react";
import { RocketIcon } from "./rocket-icon";
import { ReactionContainer } from "../reaction-container";
import { Reaction } from "../../reactions-container";
import styles from "./rocket-reaction.module.css";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reaction: Reaction;
}

export const RocketReaction = ({ reaction, onClick, ...props }: Props) => {
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
      <RocketIcon
        className={`${styles.icon} ${isClicked ? styles.animate : ""}`}
      />
    </ReactionContainer>
  );
};
