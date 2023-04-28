import { View } from "react-native";
import twFusion from "../../utils/twFusion";

interface Props {
  currentStep: number;
}

const Step = ({ currentStep }: Props) => {
  return (
    <View
      className={twFusion("w-full mt-4 flex flex-row justify-center gap-x-3")}
    >
      <View
        className={twFusion(
          "flex-1 h-1  bg-primaryBlue-100 rounded-xl",
          currentStep >= 1 && "bg-primaryBlue-300"
        )}
      />
      <View
        className={twFusion(
          "flex-1 h-1  bg-primaryBlue-100 rounded-xl",
          currentStep >= 2 && "bg-primaryBlue-300"
        )}
      />
      <View
        className={twFusion(
          "flex-1 h-1  bg-primaryBlue-100 rounded-xl",
          currentStep === 3 && "bg-primaryBlue-300"
        )}
      />
    </View>
  );
};

export default Step;
