const InputLabelBig = ({ text, holder, hint, name }) => {
  return (
    <div className="flex w-full flex-col">
      <p
        className="mb-2 h-[1.5rem] text-[1.125rem] font-[500]
        leading-[1.31rem] text-[#232323]"
      >
        {text}
      </p>
      <input
        className="border-#8AC0E2 h-[3.75rem] rounded-[0.5rem] border-2 border-solid
        pl-2 text-base"
        placeholder={holder}
        name={name}
      ></input>
      <p className="text-black-500 mt-2 text-xs"> {hint} </p>
    </div>
  );
};

export default InputLabelBig;
