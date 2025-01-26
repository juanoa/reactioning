# Reactioning

Just a simple library to show beautiful reactions in your app.

![Demo](https://raw.githubusercontent.com/juanoa/reactioning/refs/heads/main/assets/demo.gif)

```bash
npm i -E reactioning
```

## Reactions available

- `thumbUp` 👍
- `hearth` ❤️
- `thumbDown` 👎
- `rocket` 🚀

> I have more reactions in roadmap! (also custom reactions)

## Example

```typescript
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
```
