const InfoLabel = ({ text, holder, hint }) => {
  return (
    <div className="mt-24 ml-8 flex h-32 w-[36%] flex-col">
      <p
        className="mb-2 h-[1.5rem] w-[18.1rem]
        text-[1.125rem] font-[500] leading-[1.31rem] text-[#232323]"
      >
        {text}
      </p>
      <input
        className="border-#8AC0E2 h-[3.75rem] w-[25.4rem] rounded-[0.5rem] border-2 border-solid
        text-base placeholder:pl-2"
        placeholder={holder}
      ></input>
      <p className="mt-2 text-xs text-black-500"> {hint} </p>
    </div>
  );
};

export default InfoLabel;
