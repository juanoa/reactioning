import { ReactionContainer } from "../reaction-container";
import { ThumbDownIcon } from "./thumb-down-icon";
import { Reaction } from "../../reactions-container";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const ThumbDownReaction = ({ reaction, onClick }: Props) => {
  return (
    <ReactionContainer reaction={reaction} onClick={onClick}>
      <ThumbDownIcon />
    </ReactionContainer>
  );
};
