import * as React from "react";
import { Controller } from "react-hook-form";
import { TextInput, View } from "react-native";
import { SearchIcon } from "../assets/icons";
import { Control } from "react-hook-form";
import twFusion from "../../utils/twFusion";
import { COLORS } from "../../constants/theme";
import Typography from "./Typography";

interface FormInputProps {
  control: Control;
  name: string;
  label?: string;
  icon?: React.ReactElement;
  focused: boolean;
  switchOnFocus: () => void;
  switchOffFocus: () => void;
  placeholder?: string;
  cursorColor?: string;
  multiline?: boolean;
  register?: any;
}

const FormInput = ({
  control,
  register,
  name,
  label,
  icon,
  placeholder,
  cursorColor,
  focused,
  multiline = false,
  switchOffFocus,
  switchOnFocus,
}: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="relative flex flex-row items-center">
          {icon && <>{icon}</>}
          <TextInput
            placeholder={placeholder ? placeholder : ""}
            className={twFusion(
              "w-full py-3 px-4 border border-greyScale-200 rounded-2xl font-spaceMedium",
              focused && "border-primaryBlue-300",
              icon && "pl-12"
            )}
            onChangeText={onChange}
            value={value}
            cursorColor={cursorColor ? cursorColor : COLORS.primaryBlue[400]}
            onFocus={switchOnFocus}
            onBlur={switchOffFocus}
            multiline={multiline}
            numberOfLines={multiline ? 3 : 1}
          />
        </View>
      )}
    />
  );
};

export default FormInput;
