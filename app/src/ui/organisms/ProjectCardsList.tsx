import { ScrollView, View } from "react-native";
import { ProjectCard } from "../molecules";
import twFusion from "../../utils/twFusion";

export default function ProjectCardsList() {
  return (
    <ScrollView
      className={twFusion("flex gap-y-5 px-2", "-mt-3")}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <ProjectCard />
      </View>
      <View>
        <ProjectCard />
      </View>
      <View>
        <ProjectCard />
      </View>
    </ScrollView>
  );
}
