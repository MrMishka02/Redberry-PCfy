import { LandingButton, Logo, Wall } from "../../components";

function Landing() {
  return (
    <div className="flex w-full flex-col items-center">
      <Logo />
      <Wall />
      <div className="mt-16 flex w-[24.18rem] flex-col items-center sm:mt-[5rem]">
        <div className="mb-6 h-[3.75rem] w-[24.18rem] sm:w-[22.375rem]">
          <LandingButton path={"/personal-info"} text={"ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ"} />
        </div>
        <div className="h-[3.75rem] w-[24.18rem] sm:w-[22.375rem]">
          <LandingButton path={"/entries-list"} text={"ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
