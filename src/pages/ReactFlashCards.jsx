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
  const [flashCards, setFlashCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  const shuffleCardsHandler = () => {
    //const shuffledArray = helperShuffleArray(shuffledFlashCards);
    setFlashCards((shuffledArray) => helperShuffleArray(shuffledArray));
  };

  const showTitleHandler = () => {
    const flashCardsArray = [...flashCards].map((flashCard) => ({
      ...flashCard,
      showTitle: true,
    }));
    setFlashCards(flashCardsArray);
    setShowTitle(true);
  };

  const showDescriptionHandler = () => {
    const flashCardsArray = [...flashCards];
    flashCardsArray.forEach((flashCard) => (flashCard.showTitle = false));
    setFlashCards(flashCardsArray);
    setShowTitle(false);
  };

  const flashCardClickHandler = (flashCardId) => {
    const index = flashCards.findIndex(
      (flashCard) => flashCard.id === flashCardId
    );
    const flashCardsArray = [...flashCards];
    flashCardsArray[index].showTitle = !flashCardsArray[index].showTitle;
    setFlashCards(flashCardsArray);
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
          {flashCards.map(({ id, title, description, showTitle }) => (
            <FlashCard
              key={id}
              id={id}
              title={title}
              description={description}
              showTitle={showTitle}
              onFlashCardClick={flashCardClickHandler}
            />
          ))}
        </FlashCards>
      </Main>
    </div>
  );
};

export default ReactFlashCards;
