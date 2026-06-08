import AvatarComponent from "../components/Avatar";
import { useState } from "react";

function LandingPage() {
  const [userData, setUserData] = useState({ username: "" });

  // const handleClick = () => {
  //   // console.log(currentUsername);
  // };
  localStorage.setItem("username", userData.username);
  const currentUsername = localStorage.getItem("username");
  console.log(currentUsername);
  return (
    <>
      <main className='w-screen h-screen'>
        {/* <button onClick={handleClick}>click</button> */}
        {/* background image */}
        <img
          src='../src/assets/mealappbg.png'
          alt='bg-image'
          className='w-screen h-screen opacity-30 absolute object-cover object-left'
        />
        {/* background image */}
        <section className='h-20 relative flex justify-center items-center px-2 mx-2 border-2 rounded-2xl mb-45 translate-y-30'>
          <h1 className='font-bold text-base font-Play text-gray-800 text-center '>
            Who is creating the meal plan?
          </h1>
        </section>
        {/* avatar login links */}
        <section className='relative flex justify-center items-center gap-10'>
          <AvatarComponent
            avatarName={"Aru"}
            imgLink={"../src/assets/aru.png"}
            user={userData}
            setUser={setUserData}
          />

          <AvatarComponent
            avatarName={"Lester"}
            imgLink={"../src/assets/lester.png"}
            user={userData}
            setUser={setUserData}
          />

          {/* avatar login links */}
        </section>
        <p>Username: {userData.username}</p>
      </main>
    </>
  );
}

export default LandingPage;
