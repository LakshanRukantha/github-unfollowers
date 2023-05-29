import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Loading } from "@nextui-org/react";
import { useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import DisplayUser from "./DisplayUser";

interface User {
  login: string;
  avatar_url: string;
}

interface DisplayUserProps {
  avatar_url: string;
  name?: string;
  bio?: string;
  blog?: string;
  email?: string;
  location?: string;
  followers?: number;
  following?: number;
  public_repos?: number;
  total_private_repos?: number;
  twitter_username?: string;
}

const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

const InputField = ({ text = "Search" }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [notFollowingBack, setNotFollowingBack] = useState<User[]>([]);
  const [displayUser, setDisplayUser] = useState<DisplayUserProps[]>([]);

  const fetchFollowersAndFollowing = async () => {
    setIsLoading(true);
    try {
      if (username) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const [displayUser, followersResponse, followingResponse] =
          await Promise.all([
            axios.get<User[]>(
              `https://api.github.com/users/${username}`,
              config
            ),
            axios.get<User[]>(
              `https://api.github.com/users/${username}/followers`,
              config
            ),
            axios.get<User[]>(
              `https://api.github.com/users/${username}/following`,
              config
            ),
          ]);

        setDisplayUser(displayUser.data);
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
        {displayUser.length != 0 && <DisplayUser user={displayUser} />}
        <div className="mb-12 md:px-4 w-full pl-4 border-4 border-l-lightBlue border-y-0 border-r-0">
          <h2 className=" text-lg">
            GitHub Users Who Don&apos;t Follow You Back
          </h2>
          <p className="opacity-80 text-sm">
            Take Action: Unfollow or Visit User Account with a Click
          </p>
        </div>
        {username && (
          <div className="flex items-center justify-evenly gap-2 md:gap-4 flex-wrap self-center w-full">
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
