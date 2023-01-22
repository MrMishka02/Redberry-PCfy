import CircleButton from "../../components/Button/CircleButton";
import HeadLabel from "../../components/Label/HeadLabel";
import InputLabel from "../../components/Label/InputLabel";
import InputLabelBig from "../../components/Label/InputLabelBig";
import Select from "../../components/Select/Select";
import Button from "../../components/Button/Button";
import LogoBottom from "../../components/Logo/LogoBottom";
import { useEffect, useState } from "react";

function PersonalInfo() {
  const [fetchedTeam, setFetchedTeam] = useState([]);
  useEffect(() => {
    fetch(`https://pcfy.redberryinternship.ge/api/teams`)
      .then((response) => response.json())
      .then((json) => setFetchedTeam(json.data));
  }, []);

  const [fetchedPosition, setFetchedPosition] = useState([]);
  useEffect(() => {
    fetch(`https://pcfy.redberryinternship.ge/api/positions`)
      .then((response) => response.json())
      .then((json) => setFetchedPosition(json.data));
  }, []);


  
  const filteredPosition = fetchedPosition.filter((item) => item.team_id === 3);
  console.log("🚀 ~ file: PersonalInfo.jsx:35 ~ PersonalInfo ~ filteredPosition", filteredPosition)

  return (
    <div className="m-0">
      <CircleButton path={"/"} />
      <div className="m-0 mt-[5.7rem] flex justify-center sm:mt-5">
        <div className="flex flex-col items-center">
          <HeadLabel text={"თანამშრომლის ინფო"} showLine={true} />
          <p className="hidden font-normal sm:block sm:text-[0.875rem] sm:text-[#898989]">
            1/2
          </p>
        </div>
        <div className="sm:hidden">
          <HeadLabel
            path={"/laptop-info"}
            text={"ლეპტოპის მახასიათებლები"}
            showLine={false}
          />
        </div>
      </div>
      <div
        className="m-auto mt-6 h-[60.8rem] w-[76.6rem] rounded-[1.125rem] bg-[#FFFFFF]
      xl:w-full sm:mt-20 sm:w-[24.375rem]"
      >
        <div
          className="relative top-24 ml-[10.8rem] flex h-32 w-[54.875rem] justify-between
          xl:m-auto xl:w-full xl:justify-evenly
        sm:ml-[1rem] sm:mt-[-3.6rem] sm:block sm:w-[22.375rem]"
        >
          <div className="w-[25.4375rem] sm:w-[22.375rem]">
            <InputLabel
              text={"სახელი"}
              holder={"გრიშა"}
              hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
            />
          </div>
          <div className="w-[25.4375rem] sm:mt-5 sm:w-[22.375rem]">
            <InputLabel
              text={"გვარი"}
              holder={"ბაგრატიონი"}
              hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
            />
          </div>
        </div>
        <div
          className="ml-[11rem] mt-[8.8rem] flex h-[10.8rem] w-[54.875rem]
        flex-col justify-between xl:m-auto xl:mt-[10rem] xl:w-[40rem]
        sm:m-auto sm:mt-[16rem] sm:w-[22.375rem]"
        >
          <Select defaultValue={"თიმი"} data={fetchedTeam}></Select>
          <Select defaultValue={"პოზიცია"} data={filteredPosition}></Select>
        </div>
        <div
          className="relative top-[3.2rem] ml-[10.8rem] flex h-[17.6rem]
        w-[71.8%] flex-col justify-between xl:m-auto sm:m-auto sm:mt-[-2.2rem]
        sm:w-[22.375rem] "
        >
          <InputLabelBig
            text={"მეილი"}
            holder={"grish666@redberry.ge"}
            hint={"უნდა მთავრდებოდეს @redberry.ge-ით"}
          />
          <InputLabelBig
            text={"ტელეფონის ნომერი"}
            holder={"+995 598 00 07 01"}
            hint={"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
          />
        </div>
        <div
          className="mt-[9.3rem] ml-[54.7rem] h-[3.75rem] w-[11rem]
        xl:m-auto xl:mt-[8rem] xl:h-[4rem] sm:ml-[14.8rem] sm:mt-[4.6rem]
        sm:h-[2.875rem] sm:w-[8.25rem]"
        >
          <Button path={"/laptop-info"} text={"შემდეგი"} />
        </div>
      </div>
      <div className="mt-[4.3rem] mb-6 flex w-full justify-center sm:hidden">
        <LogoBottom />
      </div>
    </div>
  );
}

export default PersonalInfo;
