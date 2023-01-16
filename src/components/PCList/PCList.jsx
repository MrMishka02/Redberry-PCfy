import pcImg from "../../assets/img/pc.png";

const PCList = () => {
  return (
    <div
      className="flex h-[12.8125rem] w-[35.1875rem] items-center
    rounded-[1.25rem] border-[0.0625rem] border-solid border-[#AED1EA] bg-[#EAFAFF]"
    >
      <img src={pcImg} alt="PC" className="ml-4 w-[16.625rem] rounded-xl" />
      <div className="ml-6 flex h-[56%] w-[40%] flex-col justify-between">
        <p className="text-lg font-semibold text-[#2E2E2E]">
          ირინე ჩანქსელიანი
        </p>
        <p className="text-lg font-medium text-[#2E2E2E]">Pentium II</p>
        <p
          className="mt-4 select-none text-base text-[#4386A9]
        underline hover:cursor-pointer"
        >
          მეტის ნახვა
        </p>
      </div>
    </div>
  );
};

export default PCList;
