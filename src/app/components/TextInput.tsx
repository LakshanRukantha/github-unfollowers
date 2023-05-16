import { AiOutlineUser } from "react-icons/ai";

const TextInput = () => {
  return (
    <div className="flex bg-bgSecondary w-full">
      <AiOutlineUser className="text-5xl h-10 w-11 p-2 text-textPrimary" />
      <input
        className="p-2 outline-none w-full"
        type="text"
        name="username"
        id="username"
        aria-label="username"
        placeholder="Github username"
      />
    </div>
  );
};

export default TextInput;
