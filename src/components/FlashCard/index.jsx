import React from "react";

const FlashCard = ({
  id,
  title = "Default title",
  description = "Default description",
  showTitle,
  onFlashCardClick,
}) => {
  const titleChangeHandler = () => {
    onFlashCardClick(id);
  };

  const fontSize = showTitle ? "text-xl" : "text-sm";
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
