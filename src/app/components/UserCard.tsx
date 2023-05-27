import React from "react";
import Image from "next/image";

interface User {
  login: string;
  avatar_url: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }: any) => {
  return (
    <div className="flex flex-col bg-lighterBlue p-2 border">
      <a href={user.html_url} target="_blank">
        <Image
          className="block mx-auto"
          src={user.avatar_url}
          alt={user.login}
          height={140}
          width={140}
        />
      </a>
      <a
        className="max-w-[140px] truncate"
        href={user.html_url}
        target="_blank"
      >
        <span className="text-blue-800 font-semibold text-sm mt-1">
          @{user.login}
        </span>
      </a>
    </div>
  );
};

export default UserCard;
