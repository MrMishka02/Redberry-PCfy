function Button({ text }) {
  return (
    <button
      className="mb-[1.625rem] h-[3.75rem] w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] font-sans
    text-[1.28rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem] sm:w-[22.375rem]"
    >
      {text}
    </button>
  );
}

export default Button;
