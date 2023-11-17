import { useNavigate } from "react-router-dom";

function Button({ text, path, type, isValid }) {
  const navigate = useNavigate();

  return (
    <button
      className="mb-[1.625rem] h-full w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] font-sans
    text-[1.28rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem]"
      onClick={() => {
        if (isValid) {
          setTimeout(() => {
            navigate(path);
          }, 100);
        }
      }}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
