import Link from "next/link";
import { AiFillGithub, AiOutlineStar } from "react-icons/ai";

const repoUrl = "https://github.com/LakshanRukantha/github-unfollowers";

const NavBar = () => {
  return (
    <div className="flex px-4 py-2 items-center justify-between bg-bgSecondary shadow-sm">
      <h1 className="text-4xl font-bold text-textPrimary">
        <Link href="#">GitTrack</Link>
      </h1>
      <div className="flex gap-2">
        <Link href={repoUrl} target="_blank">
          <AiFillGithub className="text-5xl hover:rounded-full h-10 w-10 p-1 transition-all duration-300 ease-in-out hover:bg-lighterBlue hover:bg-opacity-80" />
        </Link>
        <Link
          href="#"
          className="flex items-center h-10 p-1 rounded-full transition-all duration-300 ease-in-out hover:bg-lighterBlue"
        >
          <AiOutlineStar className="text-5xl hover:rounded-full h-10 w-10 py-1  hover:bg-opacity-80" />
          <span className="mr-2 text-lg">{`01`}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
