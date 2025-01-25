# Reactioning

Just a simple library to show beautiful reactions in your app.

![Demo](https://raw.githubusercontent.com/juanoa/reactioning/refs/heads/main/assets/demo.gif)

```bash
npm i -E reactioning
```

## Example

```typescript
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
```
