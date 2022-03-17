import { useEffect, useState } from "react";

const FlashCard = ({
  title = "Default title",
  description = "Default description",
  showFlashCardTitle = true,
}) => {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  const titleChangeHandler = () => {
    setShowTitle((currentValue) => !currentValue);
  };

  const fontSize = showFlashCardTitle ? "text-xl" : "text-sm";
  return (
    <div
      className={`shadow-lg m-2 p-4 w-80 h-48 cursor-pointer
                    flex flex-row items-center justify-center
                    font-semibold ${fontSize}`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={titleChangeHandler}
    >
      {showTitle ? title : description}
    </div>
  );
};
export { FlashCard };
