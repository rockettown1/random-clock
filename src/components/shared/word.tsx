import styled from "styled-components";
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
`;
