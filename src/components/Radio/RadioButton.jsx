const RadioButton = ({ value, name, text }) => {
  return (
    <>
      <input className="w-5" type="radio" value={value} name={name} checked />{" "}
      {text}
    </>
  );
};

export default RadioButton;
