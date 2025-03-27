const PracticeButtonCard = (props) => {
    const { ButtonDetails, updateActiveBtnId, isActive } = props;
    const { imagePath, text, BtnId } = ButtonDetails;
    const onClickBtnItem = () => {
      updateActiveBtnId(BtnId);
    };
    const ActiveTabClassName = isActive ? "bg-[#144D9E]" : " bg-white";
    const ActiveTabText = isActive ? "text-white" : "text-black";
  
    return (
      <li
        onClick={onClickBtnItem}
        className={`md:ml-[4px] lg:ml-[0px] sm:mt-[10px] sm:pl-[24px] sm:w-[300px] sm:h-[41px] md:w-auto md:h-[25px] lg:w-[300px] lg:h-[41px] border-[#89A0CE] border-[1px] rounded-[20px] shadow-md flex flex-row ${ActiveTabClassName} md:m-auto md:pb-[5px] md:pt-[5px] lg:ml-[0px] lg:pb-[0px] lg:pt-[0px]`}
      >
        <img
          className="w-[30px] h-[30px] md:w-[12.25px] md:h-[13.25px] lg:w-[30px] lg:h-[30px] sm:pt-[10px] md:pt-[5px]  lg:pt-[10px]"
          src={imagePath}
        />
        <p
          className={`${ActiveTabText} md:text-[10px] sm:text-[18px] lg:text-[18px] md:pt-[0px] md:pr-[12px] md:pl-[8px] lg:pt-[6px] lg:pl-[10px] sm:pt-[6px] sm:pl-[10px]`}
        >
          {text}
        </p>
      </li>
    );
  };
  
  export default PracticeButtonCard;