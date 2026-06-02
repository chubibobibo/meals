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
    <section className='flex flex-col items-center' onClick={handleClick}>
      <img
        src={imgLink}
        alt=''
        className='w-25 h-25 rounded-full -mt-20 object-cover object-top'
      />
      <h1 className='font-semibold text-lg'>{avatarName}</h1>
    </section>
  );
}
export default AvatarComponent;
