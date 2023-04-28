import { Pressable } from "react-native";
import twFusion from "../../utils/twFusion";
import { COLORS } from "../../constants/theme";
import Typography from "./Typography";

interface ButtonProps {
  twClassName?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: "icon" | "text" | "social";
  icon?: any;
  text?: any;
}

export default function Button({
  twClassName,
  children,
  variant,
  icon,
  ...props
}: ButtonProps) {
  if (variant === "icon") {
    return (
      <Pressable
        className={twFusion(
          `p-2 rounded-xl bg-transparent border border-greyScale-200 active:scale-95`
        )}
      >
        {icon}
      </Pressable>
    );
  }

  return (
    <Pressable
      className={twFusion(
        `w-full py-4 bg-primaryBlue-400 rounded-lg active:scale-95`,
        `${twClassName}`,
        variant === "social" &&
          "bg-transparent rounded-lg border border-greyScale-200"
      )}
      {...props}
    >
      {children}
    </Pressable>
  );
}
