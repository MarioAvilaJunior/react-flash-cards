import { useState } from "react/cjs/react.development";

const FlashCard = ({
  title = "Default title",
  description = "Default description",
}) => {
  const [showTitle, setShowTitle] = useState(true);

  const titleChangeHandler = () => {
    setShowTitle((currentValue) => !currentValue);
  };
  return (
    <div
      className={`shadow-lg m-2 p-4 w-64 h-32 cursor-pointer
                    flex flex-row items-center justify-center
                    font-semibold text-xl`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
      onClick={titleChangeHandler}
    >
      {showTitle ? title : description}
    </div>
  );
};
export { FlashCard };
