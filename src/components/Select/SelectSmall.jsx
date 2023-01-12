const SelectSmall = ({ name, value, choose }) => {
  return (
    <select
      name={name}
      value={value}
      className="h-[3.75rem] w-[17.31rem] mt-[0.45rem] mr-6 rounded-[0.5rem] border-none
      bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000]"
    >
      <option value="">{choose}</option>
    </select>
  );
};

export default SelectSmall;
