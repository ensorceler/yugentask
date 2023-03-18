import * as React from "react";
import { View } from "react-native";
import { Button, Typography } from "../atoms";
import { ArrowLeftIcon, PlusIcon, SearchIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";

interface Props {
  headerName: string;
  goBackToPrevious?: () => void;
  variant?: "add" | "search_add";
}
export default function Topbar({
  headerName,
  goBackToPrevious,
  variant,
}: Props) {
  if (variant === "add") {
    return (
      <View className="w-full mt-4 relative flex flex-row justify-between items-center ">
        <Typography fw="bold" twClassName="text-2xl">
          {headerName}
        </Typography>

        <Button
          onPress={() => {}}
          twClassName="w-fit bg-transparent px-2 py-2 border border-greyScale-200"
        >
          <View>
            <PlusIcon className="text-greyScale-900" />
          </View>
        </Button>
      </View>
    );
  } else if (variant === "search_add") {
    return (
      <View className="w-full mt-4 relative flex flex-row justify-between items-center ">
        <Typography fw="bold" twClassName="text-2xl">
          {headerName}
        </Typography>
        <View className="flex flex-row items-center">
          <Button
            onPress={() => {}}
            twClassName="w-fit mr-4 bg-transparent px-2 py-2 border border-greyScale-200 "
          >
            <View>
              <SearchIcon fill={COLORS.greyScale[900]} />
            </View>
          </Button>

          <Button
            onPress={() => {}}
            twClassName="w-fit bg-transparent px-2 py-2 border border-greyScale-200"
          >
            <View>
              <PlusIcon className="text-greyScale-900" />
            </View>
          </Button>
        </View>
      </View>
    );
  }
  return (
    <View className="w-full mt-4 relative flex justify-center items-center ">
      <Button
        onPress={goBackToPrevious}
        twClassName="absolute left-0 bg-transparent w-fit px-2 py-2 flex justify-center items-center rounded-md border border-greyScale-200"
      >
        <View>
          <ArrowLeftIcon className="text-greyScale-900" />
        </View>
      </Button>

      <Typography fw="bold" twClassName="text-2xl">
        {headerName}
      </Typography>
    </View>
  );
}
