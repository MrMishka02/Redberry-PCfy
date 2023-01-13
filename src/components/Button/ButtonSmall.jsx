import { useNavigate } from "react-router-dom";

function Button({ text, path }) {
  const navigate = useNavigate();
  return (
    <button
      className="h-full w-full cursor-pointer rounded-[0.5rem]
      border-none bg-[#62A1EB] font-sans text-[1.25rem] font-[500]
      leading-6 text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
      sm:w-full"
      onClick={() => navigate(path)}
    >
      {text}
    </button>
  );
}

export default Button;
