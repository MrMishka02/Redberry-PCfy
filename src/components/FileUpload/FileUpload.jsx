import ButtonSmall from "../../components/Button/ButtonSmall";

const FileUpload = () => {
  return (
    <div
      className="relative top-[4.4rem] m-auto h-[26.43rem] w-[54.875rem] rounded-[1.125rem]
    border-2 border- border-dashed border-[#4386A9] bg-[#F6F6F6] "
    >
      <p className="m-auto relative top-[6.6rem] h-[4.75rem] w-[12.18rem] text-center
       text-[#4386A9] text-[1.25rem] leading-[2.375rem] font-medium">
        ჩააგდე ან ატვირთე ლეპტოპის ფოტო
      </p>
      <div className="relative top-[10.5rem] left-[20rem] w-[14.6rem]">
        <ButtonSmall text={"ატვირთე"} />
      </div>
    </div>
  );
};

export default FileUpload;
