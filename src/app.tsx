import { useState } from "react";
import ReactionsContainer, { Reactions } from "../lib/main";

export const App = () => {
  const [reactions, setReactions] = useState<Reactions>({
    hearth: { count: 11 },
    thumbDown: { count: 5 },
    thumbUp: { count: 4 },
    rocket: { count: 12 },
  });

  const handleClick = (
    reaction: "thumbUp" | "hearth" | "thumbDown" | "rocket",
  ) => {
    setReactions((prev) => ({
      ...prev,
      [reaction]: {
        ...prev[reaction],
        count: prev[reaction].count + 1,
        selected: true,
      },
    }));
  };

  return <ReactionsContainer values={reactions} onClick={handleClick} />;
};
