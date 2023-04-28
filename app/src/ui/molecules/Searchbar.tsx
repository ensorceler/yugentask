import { View } from "react-native";
import { FormInput, Input } from "../atoms";
import { TextInput } from "react-native";
import { SearchIcon } from "../assets/icons";
import twFusion from "../../utils/twFusion";
import { Controller, useForm } from "react-hook-form";
import { COLORS } from "../../constants/theme";
import { useState } from "react";
import { Control } from "react-hook-form";

interface Props {
  control: any;
  name: string;
  placeholder?: string;
}

export default function Searchbar({ control, name, placeholder }: Props) {
  const [focused, setFocused] = useState(false);
  const switchOnFocus = () => {
    setFocused(true);
  };
  const switchOffFocus = () => {
    setFocused(false);
  };
  return (
    <View>
      <FormInput
        control={control}
        name={name}
        placeholder={placeholder ? placeholder : ""}
        icon={
          <SearchIcon
            fill={focused ? COLORS.greyScale[900] : COLORS.greyScale[400]}
            className="absolute left-4"
            height={20}
            width={20}
          />
        }
        focused={focused}
        switchOnFocus={switchOnFocus}
        switchOffFocus={switchOffFocus}
      />
    </View>
  );
}
