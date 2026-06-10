/**@Note Rendered in LandingPage */

import type { SetStateAction, Dispatch } from "react";
import { useNavigate } from "@tanstack/react-router";

interface AvatarComponentType {
  avatarName: string;
  imgLink: string;
  user: { username: string | null };
  setUser: Dispatch<SetStateAction<user>>;
}
function AvatarComponent({
  avatarName,
  imgLink,
  user,
  setUser,
}: AvatarComponentType) {
  /** @handleClick onClick handler to save data in browser and navigate to dashboard page */
  /** @img scales and lightens when active */

  const navigate = useNavigate({ from: "/" });

  const handleClick = () => {
    setUser((prev: { username: string }) => ({
      ...prev,
      username: avatarName,
    }));
    navigate({ to: "/dashboard/index" });
  };

  console.log(localStorage.getItem("username"));
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
