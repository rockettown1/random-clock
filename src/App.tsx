import styled from "styled-components";
import { Word } from "./components/shared/word";
import { words_minutes } from "./components/shared/words-minutes";
import { useTime } from "./components/time/use-time";
import { words_hours } from "./components/shared/words-hours";

const App = () => {
  const { minutesToHighlight, hoursToHighlight } = useTime();

  return (
    <Box>
      {words_minutes.map((word, index) => {
        return (
          <Word key={index} word={word} wordsToHighlight={minutesToHighlight} />
        );
      })}
      {words_hours.map((word, index) => {
        return (
          <Word key={index} word={word} wordsToHighlight={hoursToHighlight} />
        );
      })}
    </Box>
  );
};

export default App;

const Box = styled.div`
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
