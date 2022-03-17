import { getNewId } from "../../services/idService";

const RadioButton = ({
  id = getNewId(),
  name = "name",
  children: buttonDescription = "Button Description",
  onButtonClick,
  isChecked = true,
}) => {
  const onButtonClickHandler = () => {
    onButtonClick();
  };
  return (
    <div>
      <input
        id={id}
        type="radio"
        name={name}
        onChange={onButtonClickHandler}
        checked={isChecked}
      />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
};

export { RadioButton };
