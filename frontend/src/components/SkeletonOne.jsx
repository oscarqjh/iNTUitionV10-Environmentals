import { useAuth } from "@/hooks/AuthProvider";
import { Button } from "./ui/button";
import heartIcon from "/heart.svg";
import DatabaseAPIService from "@/api/services/DatabaseAPIService";
import { useState } from "react";
const SkeletonOne = (props) => {
  const [click, setClick] = useState(false);
  const { user, setUser } = useAuth();
  const handleClick = async () => {
    const newUser = { ...user, equippedEnvironmental: props.id };
    const response = await DatabaseAPIService.updateUser(newUser);
    setUser(response.data);
    setClick(true);
  };
  return (
    <div>
      <p className="font-bold text-4xl text-white">
        {props.owned ? "???" : props.name}
      </p>
      <p className="font-normal text-base text-white">Type: {props.element}</p>
      <p className="font-normal text-base text-white">Rarity: {props.rarity}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {props.owned ? "???" : props.description}
      </p>
      <Button
        onClick={handleClick}
        className="mt-4 "
        disabled={props.owned || click}
        variant="secondary"
      >
        {click ? "Equipped" : "Equip"}
      </Button>
    </div>
  );
};

export default SkeletonOne;
