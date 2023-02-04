import { useNavigate } from "react-router-dom";
import { getValues } from "../../actions";
import { useDispatch } from "react-redux";

function Button({ text, path, selectedTeam, selectedPosition }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <button
      className="mb-[1.625rem] h-full w-full
    cursor-pointer rounded-[0.5rem] border-none bg-[#62A1EB] font-sans
    text-[1.28rem] font-[500] leading-6
    text-white hover:bg-[#317AD0] active:bg-[#1A5DAB]
    sm:mb-[1rem]"
      onClick={() => {
        navigate(path);
        dispatch(getValues({ selectedTeam, selectedPosition }));
      }}
    >
      {text}
    </button>
  );
}

export default Button;
