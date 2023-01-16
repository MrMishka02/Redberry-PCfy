import CircleButton from "../../components/Button/CircleButton";
import PCList from "../../components/PCList/PCList";

function EntriesList() {
  return (
    <div className="flex w-full h-full flex-col items-center bg-[#FFFFFF]">
      <CircleButton path={"/"} />
      <div className="flex w-full justify-center">
        <p
          className="mt-16 text-[2.125rem] font-bold
        sm:mt-8 sm:text-base"
        >
          ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ
        </p>
      </div>
      <div
        className="mt-20 mb-20 grid h-full w-[73.5rem] grid-cols-2 gap-14
        xl:flex xl:flex-col xl:items-center xl:w-[30rem]
      sm:flex sm:w-[24.375rem] sm:flex-col sm:items-center sm:gap-4"
      >
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
        <PCList />
      </div>
    </div>
  );
}

export default EntriesList;
