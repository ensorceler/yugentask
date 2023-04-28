import { View } from "react-native";
import { Input, Typography } from "../atoms";
import { UserIcon } from "../assets/icons";
import { Controller } from "react-hook-form";
import { ReactElement } from "react";

interface Props {
  twClassName?: string;
  name: string;
  control: any;
  label?: string;
  placeholder: string;
  leftIcon?: ReactElement;
}

export default function LabelInput({
  label,
  control,
  name,
  placeholder,
  leftIcon,
}: Props) {
  return (
    <View className="mt-4 flex items-start">
      {label && (
        <Typography fw="semiBold" twClassName="text-lg mb-2">
          {label}
        </Typography>
      )}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            leftIcon={
              leftIcon ? (
                leftIcon
              ) : (
                <UserIcon className="absolute left-2.5" fill="#5C68FF" />
              )
            }
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name={name}
      />
    </View>
  );
}
