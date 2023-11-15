const InfoLabelSmall = ({ text, holder, hint, errors, register, name }) => {
  return (
    <div className="flex flex-col">
      <p
        className={`${
          errors ? "text-[red]" : "text-[black]"
        } mb-2 h-[1.5rem] w-[18.1rem]
        text-[1.125rem] font-[500] leading-[1.31rem] text-[#232323]`}
      >
        {text}
      </p>
      <input
        {...register(name)}
        className={`${
          errors ? "border-[red]" : "border-#8AC0E2"
        } border-#8AC0E2 h-[3.75rem] w-full rounded-[0.5rem] border-2 border-solid
        pl-2 text-base`}
        placeholder={holder}
      ></input>
      <p
        className={`mt-2 text-xs ${errors ? "text-red-500" : "text-black-500"}`}
      >
        {" "}
        {hint}{" "}
      </p>
    </div>
  );
};

export default InfoLabelSmall;
