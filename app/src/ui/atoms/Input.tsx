import { View, TextInput, TextProps } from "react-native";
import { Controller } from "react-hook-form";
import { UserIcon } from "../assets/icons";
import { SvgProps } from "react-native-svg";
import { ReactElement } from "react";
import twFusion from "../../utils/twFusion";

interface Props extends TextProps {
  placeholder?: string;
  leftIcon?: React.FC<SvgProps> | ReactElement;
  onBlur?: () => void;
  onChangeText?: () => void;
  twClassName?: string;
  value?: any;
}

export default function Input({
  twClassName,
  leftIcon,
  placeholder,
  ...props
}: Props) {
  return (
    <View className="relative flex flex-row items-center ">
      {leftIcon && <>{leftIcon}</>}
      <TextInput
        {...props}
        placeholder={placeholder}
        selectionColor={"#5C68FF"}
        className={twFusion(
          "py-4 pl-10 flex-1 border border-greyScale-200 rounded-xl text- placeholder:font-spaceRegular placeholder:text-greyScale-600 text-greyScale-900 text-base caret-greyScale-900",
          twClassName && `${twClassName}`
        )}
      />
    </View>
  );
}
