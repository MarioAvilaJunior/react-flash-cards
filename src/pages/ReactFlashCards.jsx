import { useState } from "react";
import {
  FlashCards,
  FlashCard,
  Header,
  Main,
  ShuffleButton,
  RadioButton,
} from "../components";
import { allFlashCards } from "../data/allFlashCards";
import { helperShuffleArray } from "../helpers/arrayHelpers";
const ReactFlashCards = () => {
  const [shuffledFlashCards, setShuffledFlashCards] = useState(allFlashCards);
  const [showDescription, setShowDescription] = useState(true);

  const shuffleCardsHandler = () => {
    //const shuffledArray = helperShuffleArray(shuffledFlashCards);
    setShuffledFlashCards((shuffledArray) => helperShuffleArray(shuffledArray));
  };

  const showTitleHandler = () => {
    setShowDescription(true);
  };

  const showDescriptionHandler = () => {
    setShowDescription(false);
  };

  return (
    <div>
      <Header>React Flash Cards</Header>
      <Main>
        <div className="text-center mb-4">
          <ShuffleButton shuffleArray={shuffleCardsHandler} />
          <RadioButton id="showNameId" onButtonClick={showTitleHandler}>
            Show Title
          </RadioButton>
          <RadioButton
            id="showDescriptionId"
            onButtonClick={showDescriptionHandler}
          >
            Show Description
          </RadioButton>
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
