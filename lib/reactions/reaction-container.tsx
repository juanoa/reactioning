import React from "react";
import { Reaction } from "../reactions-container";
import NumberFlow from "@number-flow/react";
import styles from "./reaction-container.module.css";

interface Props extends React.HTMLProps<HTMLDivElement> {
  reaction: Reaction;
}

export const ReactionContainer = ({ children, reaction, ...props }: Props) => {
  return (
    <div
      className={`${styles.root} ${reaction.selected ? styles.selected : ""}`}
      aria-details="reaction-container"
      {...props}
    >
      {children}
      <NumberFlow value={reaction.count} />
    </div>
  );
};
