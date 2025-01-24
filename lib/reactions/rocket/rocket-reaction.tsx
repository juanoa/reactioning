import { RocketIcon } from "./rocket-icon";
import { ReactionContainer } from "../reaction-container";
import { Reaction } from "../../reactions-container";

interface Props {
  reaction: Reaction;
  onClick: () => void;
}

export const RocketReaction = ({ reaction, onClick }: Props) => {
  return (
    <ReactionContainer reaction={reaction} onClick={onClick}>
      <RocketIcon />
    </ReactionContainer>
  );
};
