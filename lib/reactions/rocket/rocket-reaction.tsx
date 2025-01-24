import { RocketIcon } from "./rocket-icon";
import { ReactionContainer } from "../reaction-container";

interface Props {
  count: number;
}

export const RocketReaction = ({ count }: Props) => {
  return (
    <ReactionContainer count={count}>
      <RocketIcon />
    </ReactionContainer>
  );
};
