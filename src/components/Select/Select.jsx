const Select = ({
  name,
  value,
  fetchedTeam,
  fetchedPosition,
  fetchedBrands,
  fetchedCPUS
}) => {
  return (
    <select
      name={name}
      value={value}
      className="h-[3.75rem] w-full rounded-[0.5rem] border-none
      bg-[#EBEBEB] pl-2 text-[1.125rem] leading-[1.31rem] text-[#000000]"
    >
      {fetchedTeam?.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
      {fetchedPosition?.map((item) => (
        <option value={item.team_id}>{item.name}</option>
      ))}
      {fetchedBrands?.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
      {fetchedCPUS?.map((item) => (
        <option value={item.id}>{item.name}</option>
      ))}
    </select>
  );
};

export default Select;
