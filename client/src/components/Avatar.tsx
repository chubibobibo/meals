/**@Note Rendered in LandingPage */

import type { Dispatch } from "react";
import { useNavigate } from "@tanstack/react-router";

// used to type check setUser
interface UserDataType {
  username: string | null;
  userEmail: string | null;
}

/** @SetUserData type follows the form of UserDataType using Dispatch */
interface AvatarComponentType {
  avatarName: string;
  imgLink: string;
  user: { username: string | null };
  setUserData: Dispatch<React.SetStateAction<UserDataType>>;
  avatarEmail: string;
}

function AvatarComponent({
  avatarName,
  imgLink,
  avatarEmail,
  setUserData,
}: AvatarComponentType) {
  /** @handleClick onClick handler to save data in browser and navigate to dashboard page */
  /** @img scales and lightens when active */

  const navigate = useNavigate({ from: "/" });

  const handleClick = () => {
    setUserData((prev: { username: string | null }) => ({
      ...prev,
      username: avatarName,
      userEmail: avatarEmail,
    }));
    navigate({ to: "/dashboard/index" });
  };

  // console.log(localStorage.getItem("username"));
  return (
    <section className='flex flex-col items-center cursor-pointer'>
      <img
        onClick={handleClick}
        src={imgLink}
        alt=''
        className='w-22 h-22 object-cover object-top rounded-full border-3 hover:scale-115 active:scale-115 active:mix-blend-hard-light'
      />
      <h1 className='font-semibold text-lg'>{avatarName}</h1>
    </section>
  );
}
export default AvatarComponent;
