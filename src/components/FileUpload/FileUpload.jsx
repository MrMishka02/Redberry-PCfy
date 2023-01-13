import ButtonSmall from "../../components/Button/ButtonSmall";
import icon from "../../assets/icon/icon-camera.png"

const FileUpload = () => {
  return (
    <div
      className="m-auto h-[26.43rem] w-[54.875rem]
    rounded-[1.125rem] border-2 border-dashed border-[#4386A9] bg-[#F6F6F6]
    sm:h-[15.25rem] sm:w-[22.375rem] "
    >
      <div>
        <p
          className="relative top-[6.6rem] m-auto h-[4.75rem] w-[12.18rem] text-center
       text-[1.25rem] font-medium leading-[2.375rem] text-[#4386A9] sm:hidden"
        >
          ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        </p>
      </div>
      <img src={icon} alt="Camera icon" className="hidden sm:block m-auto mt-[5rem]"/>
      <div>
      <p
          className="hidden relative top-[0.6rem] m-auto text-center
          sm:block sm:w-[9.125rem] h-[3.25rem] text-base text-[#4386A9]"
        >
          ლეპტოპის ფოტოს ატვირთვა
        </p>
      </div>

      <div className="relative top-[10.5rem] left-[20rem] h-[3.75rem] w-[14.6rem] sm:hidden">
        <ButtonSmall text={"ატვირთე"} />
      </div>
    </div>
  );
};

export default FileUpload;
