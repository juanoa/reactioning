import { useState } from "react";
import { RocketIcon } from "./rocket-icon";
import { ReactionContainer } from "../reaction-container";
import { Reaction } from "../../reactions-container";
import styles from "./rocket-reaction.module.css";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const RocketReaction = ({ reaction, onClick }: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };
  return (
    <ReactionContainer reaction={reaction} onClick={handleClick}>
      <RocketIcon
        className={`${styles.icon} ${isClicked ? styles.animate : ""}`}
      />
    </ReactionContainer>
  );
};
