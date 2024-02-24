const SkeletonOne = (props) => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">{props.name}</p>
      <p className="font-normal text-base text-white">Type: {props.element}</p>
      <p className="font-normal text-base text-white">Rarity: {props.rarity}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {props.description}
      </p>
    </div>
  );
};

export default SkeletonOne;
