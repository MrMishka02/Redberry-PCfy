import CircleButton from "../../components/Button/CircleButton";
import PCList from "../../components/PCList/PCList";

function EntriesList() {
  return (
    <div className="flex w-full flex-col items-center bg-[#FFFFFF]">
      <CircleButton path={"/"} />
      <div className="h- flex w-full justify-center">
        <p className="mt-16 text-[2.125rem] font-bold">ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</p>
      </div>
      <div className="bg--400 mt-20 mb-20 grid h-[61.5rem] w-[73.5rem] grid-cols-2 gap-14">
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
        <div className="w-[40%]">
          <PCList />
        </div>
      </div>
    </div>
  );
}

export default EntriesList;
