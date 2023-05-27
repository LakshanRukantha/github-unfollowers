import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  login: string;
  avatar_url: string;
}

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const InputField = ({ text = "Search" }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [notFollowingBack, setNotFollowingBack] = useState<User[]>([]);

  const fetchFollowersAndFollowing = async () => {
    setIsLoading(true);
    try {
      if (username) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Replace YOUR_ACCESS_TOKEN with your actual GitHub access token
          },
        };
        const [followersResponse, followingResponse] = await Promise.all([
          axios.get<User[]>(
            `https://api.github.com/users/${username}/followers`,
            config
          ),
          axios.get<User[]>(
            `https://api.github.com/users/${username}/following`,
            config
          ),
        ]);

        const followersData = followersResponse.data;
        const followingData = followingResponse.data;

        const notFollowingBackData = followingData.filter(
          (user) =>
            !followersData.some((follower) => follower.login === user.login)
        );
        setNotFollowingBack(notFollowingBackData);
      }
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
    setIsLoading(false);
  };

  const handleClick = () => {
    fetchFollowersAndFollowing();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 w-full px-4">
        <div className="flex w-full flex-col sm:flex-row items-center self-center mt-32 justify-center max-w-xl my-14">
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
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="sm:w-32 w-full mt-4 sm:mt-0">
            <button
              className={`bg-bgSecondary outline outline-lightBlue outline-1 flex items-center justify-center gap-1 uppercase text-lg font-semibold text-textPrimary px-4 h-10 transition-all w-full sm:w-32 ease-in-out duration-300 ${
                isLoading || !username
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
                  {text}
                </>
              )}
            </button>
          </div>
        </div>
        {username && (
          <div className="flex items-center justify-evenly gap-2 flex-wrap self-center w-full">
            {notFollowingBack.map((user) => (
              <UserCard key={user.login} user={user} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default InputField;
