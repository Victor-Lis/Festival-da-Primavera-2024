import { BsClockHistory } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";

type Props = {
  desc: string;
};

export default function Description({ desc }: Props) {
  return <p className="text-blue-500 text-xl text-center">{desc}</p>;
}
