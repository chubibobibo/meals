import AvatarComponent from "../components/Avatar";

function LandingPage() {
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
          />

          <AvatarComponent
            avatarName={"Lester"}
            imgLink={"../src/assets/lester.png"}
          />

          {/* avatar login links */}
        </section>
      </main>
    </>
  );
}

export default LandingPage;
