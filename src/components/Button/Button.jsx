
function Button({text}) {
  return (
    <button className="w-[24.18rem] h-[3.75rem] bg-[#62A1EB]
    border-none rounded-[0.5rem] mb-[1.625rem] font-sans font-[500]
    text-[1.28rem] text-white leading-6
    hover:bg-[#317AD0] active:bg-[#1A5DAB] cursor-pointer
    sm:w-[22.375rem] sm:mb-[1rem]"> {text} </button>
  );
}

export default Button;