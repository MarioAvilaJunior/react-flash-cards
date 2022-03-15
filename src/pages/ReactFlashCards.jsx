import { FlashCards, Header, Main } from "../components";

const ReactFlashCards = () => {
  return (
    <div>
      <Header>React Flash Cards</Header>

      <Main>
        <FlashCards></FlashCards>
        <FlashCards title="Oh My Days!" description="Bakc off!"></FlashCards>
      </Main>
    </div>
  );
};

export default ReactFlashCards;
