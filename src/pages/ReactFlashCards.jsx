import { FlashCards, FlashCard, Header, Main } from "../components";
import { allFlashCards } from "../data/allFlashCards";
const ReactFlashCards = () => {
  return (
    <div>
      <Header>React Flash Cards</Header>
      <Main>
        <FlashCards>
          {allFlashCards.map(({ id, title, description }) => (
            <FlashCard key={id} title={title} description={description} />
          ))}
        </FlashCards>
      </Main>
    </div>
  );
};

export default ReactFlashCards;
