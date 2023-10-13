import { BsArrowRight } from "react-icons/bs";
import { Button } from "../ui/button";

export const CustomButton = ({ label }: { label: string }) => {
  return (
    <Button className="relative pl-4 pr-10 py-2 rounded-lg flex items-center justify-center bg-green-400 hover:bg-green-300 group text-gray-900 font-semibold text-lg">
      <span>{label}</span>
      <span className="absolute top-1/2 right-4 -translate-y-1/2 group-hover:right-3 duration-500">
        <BsArrowRight />
      </span>
    </Button>
  );
};
