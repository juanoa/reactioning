import { ReactionContainer } from "../reaction-container";
import { ThumbDownIcon } from "./thumb-down-icon";

interface Props {
  count: number;
}

export const ThumbDownReaction = ({ count }: Props) => {
  return (
    <ReactionContainer count={count}>
      <ThumbDownIcon />
    </ReactionContainer>
  );
};
