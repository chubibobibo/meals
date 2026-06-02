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
        {/* avatar login links */}
        <section className='relative flex justify-center items-center gap-10 h-screen'>
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

        {/* <img src='../src/assets/hero.png' alt='' /> */}
      </main>
    </>
  );
}
export default LandingPage;
