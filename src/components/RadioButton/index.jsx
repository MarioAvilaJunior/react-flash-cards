import { getNewId } from "../../services/idService";

const RadioButton = ({
  id = getNewId(),
  name = "name",
  children: buttonDescription = "Button Description",
  onButtonClick,
}) => {
  const onButtonClickHandler = () => {
    onButtonClick();
  };
  return (
    <div>
      <input id={id} type="radio" name={name} onChange={onButtonClickHandler} />
      <label htmlFor={id}>{buttonDescription}</label>
    </div>
  );
};

export { RadioButton };
