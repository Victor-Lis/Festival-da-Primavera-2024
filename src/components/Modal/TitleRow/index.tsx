import { BsClockHistory } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

type Props = {
  title: string,
  hora: string,
  local: string
}

export default function TitleRow({title, hora, local}: Props) {
  return (
    <div className="flex max-[600px]:flex-col flex-wrap justify-between items-center mt-4">
      <h1 className="text-blue-700 text-3xl flex-1 min-w-36 max-[600px]:mb-5">
        {title}
      </h1>
      <div className="flex flex-col justify-end items-end max-[600px]:items-center flex-1">
        <div className="flex justify-center items-center">
          <BsClockHistory size={25} color="#1D4ED8" />
          <h1 className="text-blue-700 text-2xl ml-2">{hora}</h1>
        </div>
        <div className="flex justify-center items-center">
          <GrMapLocation size={25} color="#1D4ED8" />
          <h1 className="text-blue-700 text-2xl ml-2">{local}</h1>
        </div>
      </div>
    </div>
  );
}
