import { useState } from "react";
import { ThumbUpIcon } from "./thumb-up-icon";
import { ReactionContainer } from "../reaction-container";
import { Reaction } from "../../reactions-container";
import styles from "./thumb-up-reaction.module.css";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const ThumbUpReaction = ({ reaction, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onClick();
    if (reaction.selected) return;

    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <ReactionContainer reaction={reaction} onClick={handleClick}>
      <ThumbUpIcon
        className={`${styles.icon} ${isClicked ? styles.animate : ""}`}
      />
    </ReactionContainer>
  );
};
