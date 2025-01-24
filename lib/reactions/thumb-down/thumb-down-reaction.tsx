import { useState } from "react";
import { ReactionContainer } from "../reaction-container";
import { ThumbDownIcon } from "./thumb-down-icon";
import { Reaction } from "../../reactions-container";
import styles from "./thumb-down-reaction.module.css";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const ThumbDownReaction = ({ reaction, onClick }: Props) => {
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
      <ThumbDownIcon
        className={`${styles.icon} ${isClicked ? styles.animate : ""}`}
      />
    </ReactionContainer>
  );
};
