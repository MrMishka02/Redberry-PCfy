function HeadLabel({ text, test }) {
  return (
    <div className="flex flex-col items-center">
      <p
        className="h-[1.5rem] w-[18.1rem] select-none
            text-center text-[1.31rem] font-[700] leading-[1.5rem]
            text-[#232323] hover:cursor-pointer sm:text-base"
      >
        {text}
      </p>
      {test && <p className="mt-3 h-1 w-[11.56rem] bg-black sm:hidden"></p>}
    </div>
  );
}

export default HeadLabel;
