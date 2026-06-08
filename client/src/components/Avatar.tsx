/**@Note Rendered in LandingPage */

import type { SetStateAction, Dispatch } from "react";

interface AvatarComponentType {
  avatarName: string;
  imgLink: string;
  user: { username: string };
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

  const handleClick = () => {
    setUser((prev: { username: string }) => ({
      ...prev,
      username: avatarName,
    }));
    // localStorage.setItem("username", user.username);
  };
  // const handleClick = () => {
  //   setUser({
  //     username: avatarName,
  //   });
  //   localStorage.setItem("username", user.username);
  // };

  // console.log(user);
  return (
    <section className='flex flex-col items-center cursor-pointer'>
      <img
        onClick={handleClick}
        src={imgLink}
        alt=''
        className='w-25 h-25 object-cover object-top rounded-full border-6 hover:scale-115 active:scale-115 active:mix-blend-hard-light'
      />
      <h1 className='font-semibold text-lg'>{avatarName}</h1>
    </section>
  );
}
export default AvatarComponent;
