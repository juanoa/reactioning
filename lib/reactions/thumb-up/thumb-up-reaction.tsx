import { ThumbUpIcon } from "./thumb-up-icon";
import { ReactionContainer } from "../reaction-container";

interface Props {
  count: number;
}

export const ThumbUpReaction = ({ count }: Props) => {
  return (
    <ReactionContainer count={count}>
      <ThumbUpIcon />
    </ReactionContainer>
  );
};
