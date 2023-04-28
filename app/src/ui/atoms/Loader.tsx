import { LoaderIcon } from "lucide-react-native";
import Animated from "react-native-reanimated";

const Loader = () => {
  return (
    <Animated.View style={{}}>
      <LoaderIcon className="text-white" />
    </Animated.View>
  );
};

export default Loader;
