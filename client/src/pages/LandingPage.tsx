import AvatarComponent from "../components/Avatar";
import { useState } from "react";
import Footer from "../components/Footer";

function LandingPage() {
  // fetch localStorage content to be used as default for the userData state. This way we will have the userData state persist even after refreshes.
  const currentUsername = localStorage.getItem("username");
  const [userData, setUserData] = useState({
    username: currentUsername || null,
  });
  //stores state in local storage
  localStorage.setItem(
    "username",
    userData.username ? userData.username : "No User Selected",
  );

  return (
    <>
      <main className='w-screen h-screen'>
        {/* background image */}
        <img
          src='../src/assets/mealappbg.png'
          alt='bg-image'
          className='w-screen h-screen opacity-30 absolute object-cover object-left'
        />
        {/* background image */}
        <section className='h-20 relative flex justify-center items-center px-5 mx-2 border-2 rounded-2xl mb-50 translate-y-30'>
          <h1 className='font-bold text-base font-Play text-gray-900 text-center '>
            Who is creating the meal plan for the week?
          </h1>
        </section>
        {/* avatar login links */}
        <section className='relative flex justify-center items-center gap-10'>
          <AvatarComponent
            avatarName={"Catherine"}
            imgLink={"../src/assets/aru.png"}
            user={userData}
            setUser={setUserData}
          />

          <AvatarComponent
            avatarName={"Alistair"}
            imgLink={"../src/assets/lester.png"}
            user={userData}
            setUser={setUserData}
          />

          {/* avatar login links */}
        </section>
        <section className='mt-10 fixed inset-x-0 bottom-0'>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default LandingPage;
