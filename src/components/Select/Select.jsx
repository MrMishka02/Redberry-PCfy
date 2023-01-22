const Select = ({ defaultValue, data }) => {
  return (
    <select
      className="h-[3.75rem] w-full rounded-[0.5rem] border-none
      bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000]"
    >
      <option value="">{defaultValue}</option>
      {data?.map((item) => (
        <option key={item.name} value={item.name}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
