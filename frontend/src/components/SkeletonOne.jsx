const SkeletonOne = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">PlaceholderName</p>
      <p className="font-normal text-base text-white">Type: {props.element}</p>
      <p className="font-normal text-base text-white">Rarity: {props.rarity}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};

export default SkeletonOne;
