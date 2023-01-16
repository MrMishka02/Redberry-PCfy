import { useNavigate } from "react-router-dom";
import firework from "../../assets/img/fireworks.png";
import Button from "../../components/Button/Button";

const Modal = () => {
  const navigate = useNavigate();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center
    bg-black bg-opacity-25 backdrop-blur-sm"
    >
      <div className="flex h-[33.56rem] w-[52.9rem] flex-col">
        <button className="place-self-end text-xl text-white">X</button>
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-2">
          <img src={firework} alt="Fireworks" className="w-[12rem]" />
          <p className="text-2xl font-[700] text-[#292929] ">
            ჩანაწერი დამატებულია!
          </p>
          <div className="mt-20 w-[18.5625rem] text-[1.25rem] leading-6">
            <Button text={"სიაში გადაყვანა"} />
          </div>
          <p
            className="mb-11 text-[1.25rem] font-medium leading-6 text-[#0089A7] hover:cursor-pointer"
            onClick={() => navigate("/")}
          >
            მთავარი
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
