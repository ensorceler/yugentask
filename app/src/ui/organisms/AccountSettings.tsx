import { View } from "react-native";
import { Typography } from "../atoms";
import SettingItem from "../molecules/SettingItem";
import React, { ReactElement } from "react";

interface Props {
  heading?: string;
  items: Array<{
    settingName: string;
    isToggled?: boolean;
    settingIcon?: ReactElement;
    settingFn?: () => void;
  }>;
}

export default function AccountSettings({ heading, items }: Props) {
  return (
    <View>
      {heading && (
        <Typography fw="regular" twClassName="text-greyScale-500 mb-2">
          {heading}
        </Typography>
      )}

      <View className="">
        {items?.map((settingItem) => (
          <SettingItem
            key={settingItem?.settingName}
            name={settingItem?.settingName}
            isToggled={settingItem?.isToggled}
            icon={settingItem?.settingIcon}
            fn={settingItem?.settingFn}
          />
        ))}
      </View>
    </View>
  );
}
