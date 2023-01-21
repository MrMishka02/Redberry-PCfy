const SelectSmall = ({ name, value, fetchedCPUS }) => {
  return (
    <select
      name={name}
      value={value}
      className="mt-[0.45rem] mr-6 h-[3.75rem] w-full rounded-[0.5rem] border-none
      bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000] sm:mr-0"
    >
      {fetchedCPUS?.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
    </select>
  );
};

export default SelectSmall;
