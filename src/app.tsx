import { useState } from "react";
import ReactionsContainer, { Reactions } from "../lib/main";

export const App = () => {
  const [reactions, setReactions] = useState<Reactions>({
    hearth: { count: 11 },
    thumbUp: { count: 0 },
    rocket: { count: 12 },
  });

  const handleClick = (
    reaction: "thumbUp" | "hearth" | "thumbDown" | "rocket"
  ) => {
    setReactions((prev) => {
      const currentReaction = prev[reaction];
      if (!currentReaction) return prev;

      return {
        ...prev,
        [reaction]: {
          ...currentReaction,
          count: currentReaction.selected
            ? currentReaction.count - 1
            : currentReaction.count + 1,
          selected: !currentReaction.selected,
        },
      };
    });
  };

  return <ReactionsContainer values={reactions} onClick={handleClick} />;
};
