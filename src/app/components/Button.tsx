import { AiOutlineSearch } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import { useState } from "react";

type ButtonType = {
  text: String;
};

const Button = (props: ButtonType) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };
  return (
    <div>
      <button
        className={`bg-bgSecondary hover:bg-lightBlue flex items-center gap-1 uppercase text-lg font-semibold text-textPrimary px-4 h-10 transition-all ease-in-out duration-300 ${
          isLoading ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        type="button"
        onClick={handleClick}
        disabled={isLoading}
      >
        {isLoading ? <Loading type="points" /> : <AiOutlineSearch />}
        {isLoading ? "" : props.text}
      </button>
    </div>
  );
};

export default Button;
