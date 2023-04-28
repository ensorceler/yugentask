import PopoverView from "react-native-popover-view";
import * as React from "react";
import { Pressable, View } from "react-native";
import { Typography } from "../atoms";
import { MoreIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";

interface Props {
  from?: any;
}

const Popover = ({ from }: Props) => {
  return (
    <PopoverView
      from={(_, showPopOver) => (
        <Pressable onPress={showPopOver}>
          {from ? from : <MoreIcon fill={COLORS.greyScale[600]} />}
        </Pressable>
      )}
    >
      <View className="bg-white p-3 w-40 rounded-xl flex flex-col ">
        <View className="flex flex-row items-center">
          <Typography fw="regular">Invite Members</Typography>
        </View>
        <View>
          <Typography fw="regular">Remove</Typography>
        </View>
      </View>
    </PopoverView>
  );
};
export default Popover;
