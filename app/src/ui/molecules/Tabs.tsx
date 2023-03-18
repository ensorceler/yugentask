import { useState } from "react";
import { View } from "react-native";
import twFusion from "../../utils/twFusion";
import { Button, Typography } from "../atoms";

const tabContent = [
  { tabLabel: "All Tasks", value: 1 },
  { tabLabel: "In Progress", value: 2 },
  { tabLabel: "Completed", value: 3 },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <View className="p-2 bg-primaryBlue-50 rounded-3xl h-16 flex flex-row justify-around">
      {tabContent.map((item) => (
        <Button
          key={item?.value}
          onPress={() => {
            setActiveTab(item?.value);
          }}
          twClassName={twFusion(
            "w-fit flex-1 py-2 bg-transparent rounded-2xl flex justify-center items-center",
            item?.value === activeTab && "bg-white"
          )}
        >
          <Typography
            fw="regular"
            twClassName={twFusion(
              item?.value === activeTab &&
                "text-primaryBlue-400 font-spaceMedium"
            )}
          >
            {item?.tabLabel}
          </Typography>
        </Button>
      ))}
    </View>
  );
}
