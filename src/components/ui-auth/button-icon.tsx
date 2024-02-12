import { FC } from "react";
import { IconType } from "react-icons";

interface ButtonIconProps {
  icon: IconType;
}
const ButtonIcon: FC<ButtonIconProps> = ({ icon: Icon }) => {
  return (
    <button
      type="button"
      className="p-4 bg-gary-100 rounded-xl text-primary
     border-2 border-transparent hover:border-primary transition-colors duration-300"
    >
      <Icon />
    </button>
  );
};

export default ButtonIcon;
