import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

export default function Card({
  title,
  hora,
  local,
  id,
}: {
  title: string;
  hora: string;
  local: string;
  id: string;
}) {
  return (
    <Link
      href={`projeto/${id}`}
      className="px-4 py-2 shadow drop-shadow shadow-blue-500 rounded min-w-60 bg-white hover:opacity-60 duration-150"
    >
      <h1 className="text-blue-700 text-2xl">{title}</h1>
      <div className="w-full flex flex-wrap justify-between items-center mt-2">
        <div className="flex justify-center items-center">
          <BsClockHistory size={25} color="#5593f7" />
          <h1 className="text-blue-500 text-xl ml-1 mr-5">{hora}</h1>
        </div>
        <div className="flex justify-center items-center">
          <GrMapLocation size={25} color="#5593f7" />
          <h1 className="text-blue-500 text-xl ml-1">{local}</h1>
        </div>
      </div>
    </Link>
  );
}
