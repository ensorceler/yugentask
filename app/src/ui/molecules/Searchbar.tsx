import { View } from "react-native";
import { Input } from "../atoms";
import { SearchIcon } from "../assets/icons";
import twFusion from "../../utils/twFusion";

interface Props {
  placeholder?: string;
  variant?: "compact" | "spacious";
}

export default function Searchbar({ variant, placeholder }: Props) {
  return (
    <View>
      <Input
        twClassName={twFusion("pl-12", variant === "compact" && "py-2")}
        leftIcon={<SearchIcon fill="#B8B8B8" className="absolute left-3" />}
        placeholder={placeholder ? placeholder : "Search your tasks..."}
      />
    </View>
  );
}
