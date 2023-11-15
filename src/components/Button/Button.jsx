import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

function Button({ text, path, type }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, lastName, team, position, email, phoneNumber } =
    useSelector((state) => state.userData);

  return (
    <button
      className="mb-[1.625rem] h-full w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] font-sans
    text-[1.28rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem]"
      onClick={() => {
        if (location.pathname === "/") {
          navigate(path);
        } else {
          console.log(firstName, lastName, team, position, email, phoneNumber);
        }
      }}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;
