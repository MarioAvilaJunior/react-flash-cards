import { useState } from "react";
import {
  FlashCards,
  FlashCard,
  Header,
  Main,
  ShuffleButton,
} from "../components";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";
const ReactFlashCards = () => {
  const [shuffledFlashCards, setShuffledFlashCards] = useState(allFlashCards);

  const shuffleCardsHandler = () => {
    //const shuffledArray = helperShuffleArray(shuffledFlashCards);
    setShuffledFlashCards((shuffledArray) => helperShuffleArray(shuffledArray));
  };
  return (
    <div>
      <Header>React Flash Cards</Header>
      <Main>
        <div className="text-center mb-4">
          <ShuffleButton shuffleArray={shuffleCardsHandler} />
        </div>
        <FlashCards>
          {shuffledFlashCards.map(({ id, title, description }) => (
            <FlashCard key={id} title={title} description={description} />
          ))}
        </FlashCards>
      </Main>
    </div>
  );
};

export default ReactFlashCards;
