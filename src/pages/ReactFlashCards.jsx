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
  const [showTitle, setShowTitle] = useState(true);

  const shuffleCardsHandler = () => {
    //const shuffledArray = helperShuffleArray(shuffledFlashCards);
    setShuffledFlashCards((shuffledArray) => helperShuffleArray(shuffledArray));
  };

  const showTitleHandler = () => {
    setShowTitle(true);
  };

  const showDescriptionHandler = () => {
    setShowTitle(false);
  };

  return (
    <div>
      <Header>React Flash Cards</Header>
      <Main>
        <div className="text-center mb-4">
          <ShuffleButton shuffleArray={shuffleCardsHandler} />
          <RadioButton
            id="showNameId"
            onButtonClick={showTitleHandler}
            isChecked={showTitle ? "checked" : ""}
          >
            Show Title
          </RadioButton>
          <RadioButton
            id="showDescriptionId"
            onButtonClick={showDescriptionHandler}
            isChecked={showTitle ? "" : "checked"}
          >
            Show Description
          </RadioButton>
        </div>
        <FlashCards>
          {shuffledFlashCards.map(({ id, title, description }) => (
            <FlashCard
              key={id}
              title={title}
              description={description}
              showFlashCardTitle={showTitle}
            />
          ))}
        </FlashCards>
      </Main>
    </div>
  );
};

export default ReactFlashCards;
