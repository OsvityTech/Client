import { CheckCircle } from "lucide-react";

const JoinUsList = (props) => {
  const { details } = props;
  const { text } = details;

  return (
    <li className="flex flex-row sm:ml-[15px] lg:ml-[40px] pl-[10px] lg:p-[10px]">
      <CheckCircle className="text-black lg:w-[25px] lg:h-[25px] sm:w-[15px] sm:h-[15px] md:w-[20px] md:h-[20px] lg:mt-[6px] md:mt-[3px]" />

      <h1 className="pl-[10px] md:text-[16px] sm:text-[12px] lg:text-[24px] font-[Roboto] text-[#164A98] font-[500]  h-[28px]">
        {text}
      </h1>
    </li>
  );
};
export default JoinUsList;