function Button({ text }) {
  return (
    <button
      className="h-[3.75rem] w-[11rem] cursor-pointer rounded-[0.5rem]
      border-none bg-[#62A1EB] font-sans text-[1.25rem] font-[500]
      leading-6 text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
      sm:mb-[1rem] sm:w-[22.375rem]"
    >
      {text}
    </button>
  );
}

export default Button;
