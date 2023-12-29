import styled, { keyframes } from "styled-components";
import { useHighlight } from "../shared/use-highlight";

type HoursProps = {
  word: string;
  wordsToHighlight: string[];
};

export const Word = ({ word, wordsToHighlight }: HoursProps) => {
  const { highlight } = useHighlight(word, wordsToHighlight);

  return <Item $highlight={highlight}>{word}</Item>;
};

type ItemProps = {
  $highlight: boolean;
};

export const Item = styled.h1<ItemProps>`
  margin: 0 20px;
  font-size: 64px;
  color: ${({ $highlight }) =>
    $highlight ? "rgb(255,255,255)" : "rgb(21, 21, 21)"};
  text-shadow: ${({ $highlight }) =>
    $highlight &&
    `
    
    0 0 10px #fff,
    0 0 21px #a9e4e0,
    0 0 42px #145088`};
`;
