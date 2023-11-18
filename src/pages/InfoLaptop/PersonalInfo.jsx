import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../Validations/UserValidations";
import {
  Button,
  CircleButton,
  HeadLabel,
  InputLabel,
  InputLabelBig,
  LogoBottom,
  Select,
} from "../../components";

function PersonalInfo() {
  const [fetchedTeam, setFetchedTeam] = useState([]);
  const [fetchedPosition, setFetchedPosition] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState([]);

  useEffect(() => {
    fetch("https://mrmishka02.github.io/pcfy_api/pcfy.json")
      .then((res) => res.json())
      .then((json) => setFetchedTeam(json.teams));
  }, []);

  useEffect(() => {
    fetch("https://mrmishka02.github.io/pcfy_api/pcfy.json")
      .then((res) => res.json())
      .then((json) => setFetchedPosition(json.positions));
  }, []);

  function storeFirstName(event) {
    localStorage.setItem("firstName", event.target.value);
  }
  function storeLastName(event) {
    localStorage.setItem("lastName", event.target.value);
  }
  function storeTeam(event) {
    setSelectedTeam(event.target.value);
    localStorage.setItem("team", event.target.value);
  }
  function storePosition(event) {
    localStorage.setItem("position", event.target.value);
  }
  function storeEmail(event) {
    localStorage.setItem("email", event.target.value);
  }
  function storePhoneNumber(event) {
    localStorage.setItem("phoneNumber", event.target.value);
  }

  let filteredTeam = fetchedTeam.filter((item) => item.name === selectedTeam);

  const filteredPosition = fetchedPosition.filter(
    (item) => item.team_id === filteredTeam[0]?.id
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const submitForm = (data) => {
    console.log(data);
    localStorage.setItem("personalInfo", JSON.stringify(data));
  };

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
      <form
        onSubmit={handleSubmit(submitForm)}
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
              value={localStorage.getItem("firstName")}
              text={"სახელი"}
              holder={"გრიშა"}
              hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
              register={register}
              errors={errors.firstName}
              name="firstName"
              onChange={storeFirstName}
            />
          </div>
          <div className="w-[25.4375rem] sm:mt-5 sm:w-[22.375rem]">
            <InputLabel
              value={localStorage.getItem("lastName")}
              text={"გვარი"}
              holder={"ბაგრატიონი"}
              hint={"მინიმუმ 2 სიმბოლო, ქართული ასოები"}
              register={register}
              errors={errors.lastName}
              name="lastName"
              onChange={storeLastName}
            />
          </div>
        </div>
        <div
          className="ml-[10.8rem] mt-[8.8rem] flex h-[10.8rem] w-[54.875rem]
        flex-col justify-between xl:m-auto xl:mt-[10rem] xl:w-[40rem]
        sm:m-auto sm:mt-[16rem] sm:w-[22.375rem]"
        >
          <Select
            defaultValue={localStorage.getItem("team") || "თიმი"}
            name="team"
            register={register}
            errors={errors.team}
            data={fetchedTeam}
            selectChange={storeTeam}
          ></Select>
          <Select
            defaultValue={localStorage.getItem("position") || "პოზიცია"}
            name="position"
            register={register}
            errors={errors.position}
            data={filteredPosition}
            disabled={selectedTeam === "" ? true : false}
            selectChange={storePosition}
          ></Select>
        </div>
        <div
          className="relative top-[3.2rem] ml-[10.8rem] flex h-[17.6rem]
        w-[71.8%] flex-col justify-between xl:m-auto sm:m-auto sm:mt-[-2.2rem]
        sm:w-[22.375rem] "
        >
          <InputLabelBig
            value={localStorage.getItem("email")}
            text={"მეილი"}
            holder={"grish22@redberry.ge"}
            hint={"უნდა მთავრდებოდეს @redberry.ge-ით"}
            name="email"
            register={register}
            errors={errors.email}
            onChange={storeEmail}
          />
          <InputLabelBig
            value={localStorage.getItem("phoneNumber")}
            text={"ტელეფონის ნომერი"}
            holder={"+995 598 00 07 01"}
            hint={"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
            name="phoneNumber"
            register={register}
            errors={errors.phoneNumber}
            onChange={storePhoneNumber}
          />
        </div>
        <div
          className="mt-[9.3rem] ml-[54.7rem] h-[3.75rem] w-[11rem]
        xl:m-auto xl:mt-[8rem] xl:h-[4rem] sm:ml-[14.8rem] sm:mt-[4.6rem]
        sm:h-[2.875rem] sm:w-[8.25rem]"
        >
          <Button
            path={"/laptop-info"}
            text={"შემდეგი"}
            type="submit"
            isValid={isValid}
          />
        </div>
      </form>
      <div className="mt-[4.3rem] mb-6 flex w-full justify-center sm:hidden">
        <LogoBottom />
      </div>
    </div>
  );
}

export default PersonalInfo;
