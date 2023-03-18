import { Pressable } from "react-native";
import twFusion from "../../utils/twFusion";

interface ButtonProps {
  twClassName?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  variant?: string;
}

export default function Button({
  twClassName,
  children,
  variant,
  ...props
}: ButtonProps) {
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
