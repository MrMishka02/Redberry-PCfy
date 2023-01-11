import CircleButton from "../../components/Button/CircleButton";
import HeadLabel from "../../components/Label/HeadLabel";
import InfoLabel from "../../components/Label/InfoLabel";

function PersonalInfo() {
  return (
    <>
      <CircleButton />
      <div className="mt-[5.7rem] flex justify-center">
        <HeadLabel text={"თანამშრომლის ინფო"} test={true} />
        <HeadLabel text={"ლეპტოპის მახასიათებლები"} test={false} />
      </div>

      <div
        className="m-auto mt-6 flex h-[60.8rem] w-[76.6rem]
                                justify-center rounded-[1.125rem] bg-[#FFFFFF]"
      >
        <InfoLabel
          text={"სახელი"}
          holder={"გრიშა"}
          hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
        />
        <InfoLabel
          text={"გვარი"}
          holder={"ბაგრატიონი"}
          hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
        />
      </div>
    </>
  );
}

export default PersonalInfo;
