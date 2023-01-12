import CircleButton from "../../components/Button/CircleButton";
import HeadLabel from "../../components/Label/HeadLabel";
import InfoLabel from "../../components/Label/InfoLabel";
import InfoLabelBig from "../../components/Label/InfoLabelBig";
import Select from "../../components/Select/Select";
import ButtonSmall from "../../components/Button/ButtonSmall";
import LogoBottom from "../../components/Logo/LogoBottom";
import FileUpload from "../../components/FileUpload/FileUpload";

function PersonalInfo() {
  return (
    <>
      <CircleButton />
      <div className="mt-[5.7rem] flex justify-center">
        <HeadLabel text={"თანამშრომლის ინფო"} test={true} />
        <HeadLabel text={"ლეპტოპის მახასიათებლები"} test={false} />
      </div>
      <div className="m-auto mt-6 h-[98.75rem] w-[76.6rem] rounded-[1.125rem] bg-[#FFFFFF]">
        <FileUpload />
        <div className="relative top-[7.5rem] ml-[10.8rem] flex h-32 w-[71.8%] justify-between">
          <InfoLabel
            text={"ლეპტოპის სახელი"}
            holder={"HP"}
            hint={"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          />
          <Select choose={"თიმი"}></Select>
        </div>
        <div
          className="ml-[11rem] mt-[8.8rem] flex h-[10.8rem] w-[54.875rem]
        flex-col justify-between"
        >
          <Select choose={"პოზიცია"}></Select>
        </div>
        <div
          className="relative top-[3.2rem] ml-[10.8rem] flex h-[17.6rem]
        w-[71.8%] flex-col justify-between"
        >
          <InfoLabelBig
            text={"მეილი"}
            holder={"grish666@redberry.ge"}
            hint={"უნდა მთავრდებოდეს @redberry.ge-ით"}
          />
          <InfoLabelBig
            text={"ტელეფონის ნომერი"}
            holder={"+995 598 00 07 01"}
            hint={"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
          />
        </div>
        <div className="mt-[9.3rem] ml-[54.7rem]">
          <ButtonSmall text={"შემდეგი"} />
        </div>
      </div>
      <div className="mt-[4.3rem] mb-6 flex w-full justify-center">
        <LogoBottom />
      </div>
    </>
  );
}

export default PersonalInfo;
