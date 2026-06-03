interface AvatarComponentType {
  avatarName: string;
  imgLink: string;
}

function AvatarComponent({ avatarName, imgLink }: AvatarComponentType) {
  /** @handleClick onClick handler to save data in browser and navigate to dashboard page */
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <section
      className='flex flex-col items-center cursor-pointer'
      onClick={handleClick}
    >
      <img
        src={imgLink}
        alt=''
        className='w-25 h-25 object-cover object-top rounded-full border-6 hover:scale-115 active:opacity-80'
      />
      <h1 className='font-semibold text-lg'>{avatarName}</h1>
    </section>
  );
}
export default AvatarComponent;
