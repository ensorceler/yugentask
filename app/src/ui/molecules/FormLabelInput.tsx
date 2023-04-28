import * as React from "react";
import { Control } from "react-hook-form";
import { View } from "react-native";
import { FormInput, Typography } from "../atoms";
import { FieldErrors } from "react-hook-form";

interface Props {
  control: Control<any>;
  name: string;
  label: string;
  icon?: React.ReactElement;
  placeholder?: string;
  multiline?: boolean;
  errors?: FieldErrors;
  register?: any;
}

const FormLabelInput = ({
  control,
  name,
  label,
  placeholder,
  icon,
  multiline = false,
  errors,
  register,
}: Props) => {
  const [focused, setFocused] = React.useState(false);
  const switchOnFocus = () => {
    setFocused(true);
  };
  const switchOffFocus = () => {
    setFocused(false);
  };

  return (
    <View className="flex">
      {label && (
        <Typography fw="medium" twClassName="mb-2 text-base">
          {label}
        </Typography>
      )}
      <FormInput
        control={control}
        name={name}
        label={label}
        icon={icon}
        focused={focused}
        placeholder={placeholder}
        switchOnFocus={switchOnFocus}
        switchOffFocus={switchOffFocus}
        multiline={multiline}
      />

      {errors?.[name]?.message && (
        <Typography fw="regular" twClassName="mb-2 text-sm text-primaryRed">
          {/**@ts-ignore */}
          {errors?.[name]?.message}
        </Typography>
      )}
    </View>
  );
};
export default FormLabelInput;
