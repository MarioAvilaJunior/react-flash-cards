import { FlashCards, Header, Main } from "../components";
import { allFlashCards } from "../data/allFlashCards";
const ReactFlashCards = () => {
  return (
    <div>
      <Header>React Flash Cards</Header>

      <Main>
        {allFlashCards.map(({ id, title, description }) => {
          return (
            <FlashCards
              key={id}
              title={title}
              description={description}
            ></FlashCards>
          );
        })}
      </Main>
    </div>
  );
};

export default ReactFlashCards;
