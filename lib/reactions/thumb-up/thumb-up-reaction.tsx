import { ThumbUpIcon } from "./thumb-up-icon";
import { ReactionContainer } from "../reaction-container";
import { Reaction } from "../../reactions-container";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const ThumbUpReaction = ({ reaction, onClick }: Props) => {
  return (
    <ReactionContainer reaction={reaction} onClick={onClick}>
      <ThumbUpIcon />
    </ReactionContainer>
  );
};
