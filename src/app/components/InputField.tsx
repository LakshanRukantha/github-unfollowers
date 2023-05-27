import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import { useState } from "react";

type ButtonType = {
  text: String;
};

const InputField = (props: ButtonType) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
  };
  return (
    <>
      <div className="flex bg-bgSecondary w-full">
        <AiOutlineUser className="text-5xl h-10 w-11 p-2 outline outline-lightBlue outline-1 text-textPrimary" />
        <input
          className="p-2 outline text-gray-500 outline-lightBlue outline-1 w-full"
          type="text"
          name="username"
          id="username"
          disabled={isLoading}
          aria-label="username"
          placeholder="Github username"
        />
      </div>
      <div className="sm:w-32 w-full mt-4 sm:mt-0">
        <button
          className={`bg-bgSecondary outline outline-lightBlue outline-1 flex items-center justify-center gap-1 uppercase text-lg font-semibold text-textPrimary px-4 h-10 transition-all w-full sm:w-32 ease-in-out duration-300 ${
            isLoading
              ? "cursor-not-allowed"
              : "cursor-pointer hover:bg-lightBlue active:scale-[98%]"
          }`}
          type="button"
          onClick={handleClick}
          disabled={isLoading}
        >
          {isLoading ? (
            <Loading type="default" size="sm" />
          ) : (
            <>
              <AiOutlineSearch />
              {props.text}
            </>
          )}
        </button>
      </div>
    </>
  );
};

export default InputField;
