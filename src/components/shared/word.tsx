import styled, { css } from "styled-components";
import { useHighlight } from "../shared/use-highlight";
import { toGlow, fromGlow } from "./animations";

type HoursProps = {
  word: string;
  wordsToHighlight: string[];
};

export const Word = ({ word, wordsToHighlight }: HoursProps) => {
  const { highlight, shouldAnimate } = useHighlight(word, wordsToHighlight);

  return (
    <Item $highlight={highlight} $shouldAnimate={shouldAnimate}>
      {word}
    </Item>
  );
};

type ItemProps = {
  $highlight: boolean;
  $shouldAnimate: boolean;
};

export const Item = styled.h1<ItemProps>`
  margin: 0 20px;
  font-size: calc(20px + 3.6vw);
  line-height: calc(30px + 3.6vw);
  color: rgba(255, 255, 255, 0.15);
  text-shadow: ${({ $highlight }) =>
    $highlight &&
    `
    0 0 0px #fff,
    0 0 10px #fff,
    0 0 21px #a9e4e0,
    0 0 42px #145088`};

  animation: ${({ $shouldAnimate }) =>
    $shouldAnimate
      ? css`
          ${toGlow} 2s ease
        `
      : css`
          ${fromGlow} 2s ease
        `};
`;
