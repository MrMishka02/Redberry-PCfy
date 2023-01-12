import CircleButton from "../../components/Button/CircleButton";
import HeadLabel from "../../components/Label/HeadLabel";
import InfoLabel from "../../components/Label/InfoLabel";
import InfoLabelSmall from "../../components/Label/InfoLabelSmall";
import SelectSmall from "../../components/Select/SelectSmall";
import SelectMedium from "../../components/Select/SelectMedium";
import ButtonSmall from "../../components/Button/ButtonSmall";
import LogoBottom from "../../components/Logo/LogoBottom";
import FileUpload from "../../components/FileUpload/FileUpload";
import Line from "../../components/Line/Line";
import RadioButton from "../../components/Radio/RadioButton";

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
        <div className="h-30 relative top-[7.2rem] ml-[10.8rem] flex w-[55rem] items-center justify-between">
          <InfoLabel
            text={"ლეპტოპის სახელი"}
            holder={"HP"}
            hint={"ლათინური ასოები, ციფრები, !@#$%^&*()_+="}
          />
          <SelectMedium choose={"ლეპტოპის ბრენდი"}></SelectMedium>
        </div>
        <div className="relative top-[10rem] left-[11rem] w-[55rem]">
          <Line />
        </div>
        <div
          className="ml-[11rem] mt-[12rem] flex h-[10.8rem] w-[55rem]
         items-center justify-between"
        >
          <SelectSmall choose={"CPU"}></SelectSmall>
          <InfoLabelSmall
            text={"CPU-ს ბირთვი"}
            holder={"14"}
            hint={"მხოლოდ ციფრები"}
          />
          <InfoLabelSmall
            text={"CPU-ს ნაკადი"}
            holder={"365"}
            hint={"მხოლოდ ციფრები"}
          />
        </div>
        <div className="relative top-[12rem] left-[11rem] w-[55rem]">
          <Line />
        </div>
        <div
          className="relative top-[1.4rem] ml-[10.8rem] flex h-[7.6rem]
        w-[71.8%] items-center justify-between"
        >
          <InfoLabel
            text={"ლეპტოპის RAM (GB)"}
            holder={"16"}
            hint={"მხოლოდ ციფრები"}
          />
          <div>
            <p
              className="relative mb-6 mt-[-3.2rem] ml-0 text-[1.125rem] font-medium
          text-[#000000] "
            >
              მეხსიერების ტიპი
            </p>
            <div className="mr-[10.6rem] flex h-full w-[15rem] justify-between">
              <RadioButton value={"SSD"} name={"memory"} text={"SSD"} />
              <RadioButton value={"HDD"} name={"memory"} text={"HDD"} />
            </div>
          </div>
        </div>
        <div className="relative top-[7.6rem] ml-[10.8rem] flex h-32 w-[71.8%] justify-between">
          <InfoLabel
            text={"შეძენის რიცხვი (არჩევითი)"}
            holder={"დდ / თთ / წწწწ"}
          />
          <InfoLabel
            text={"ლეპტოპის ფასი"}
            holder={"0000"}
            hint={"მხოლოდ ციფრები"}
          />
        </div>
        <div className="relative left-[10.8rem]">
          <p
            className="relative mb-6 mt-[10rem] text-[1.125rem] font-medium
          text-[#000000] "
          >
            ლეპტოპის მდგომარეობა
          </p>
          <div className="flex h-full w-[15rem] justify-between">
            <RadioButton value={"new"} name={"condition"} text={"ახალი"} />
            <RadioButton value={"used"} name={"condition"} text={"მეორადი"} />
          </div>
        </div>
        <div className="flex justify-between items-center w-[55rem] relative top-[4.7rem] left-[10.9rem]">
          <p className="text-[1.125rem] leading-5 font-medium text-[#62A1EB]">უკან</p>
          <div className="w-[14rem]">
            <ButtonSmall text={"დამახსოვრება"} />
          </div>
        </div>
      </div>
      <div className="mt-[3rem] mb-6 flex w-full justify-center">
        <LogoBottom />
      </div>
    </>
  );
}

export default PersonalInfo;
