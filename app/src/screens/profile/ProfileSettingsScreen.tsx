import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LabelInput, Topbar } from "../../ui/molecules";
import { StatusBar } from "expo-status-bar";
import { ProfileSettingsScreenProps } from "../../@types/navigation";
import { Image, View } from "react-native";
import { Button, Typography } from "../../ui/atoms";
import { useForm } from "react-hook-form";
import { EmailIcon } from "../../ui/assets/icons";
import { COLORS } from "../../constants/theme";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ProfileSettingsScreen({
  navigation,
}: ProfileSettingsScreenProps) {
  const { control } = useForm();

  const [image, setImage] = useState(null);
  const [imagePickerAsset, setImagePickerAsset] =
    useState<null | ImagePicker.ImagePickerAsset>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImagePickerAsset(result.assets[0]);
      setImage((result as any)?.assets[0]?.uri);
    }
  };

  //  upload the image data and also send the fullname for updation in DB
  const saveData = () => {
    if (imagePickerAsset) {
      let localUri = imagePickerAsset?.uri!;
      let filename = localUri.split("/").pop()!;

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // Upload the image using the fetch and FormData APIs
      let formData = new FormData();

      // Assume "photo" is the name of the form field the server expects
      formData.append(
        "avatar_image",
        JSON.parse(JSON.stringify({ uri: localUri, name: filename, type }))
      );
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-6">
          <Topbar
            headerName="Profile Settings"
            goBackToPrevious={() => navigation.goBack()}
          />
          <View className="mt-3 flex flex-row items-center">
            <View className="bg-greyScale-600 h-20 w-20 rounded-full overflow-hidden">
              {image && (
                <Image source={{ uri: image }} className="h-full w-full" />
              )}
            </View>
            <View className="ml-4 flex ">
              <Typography fw="regular" twClassName="mb-2">
                Upload your best photo here
              </Typography>
              <Button twClassName="px-3 w-max" onPress={pickImage}>
                <Typography fw="regular" twClassName="text-white">
                  Upload Photo
                </Typography>
              </Button>
            </View>
          </View>
        </View>

        {/** grey divider, gives a cleaner look*/}
        <View
          aria-label="grey-divider"
          className="w-full h-3 bg-greyScale-100 mt-4"
        />
        <View className="px-6">
          <LabelInput
            name="fullName"
            control={control}
            label="Full name"
            placeholder="Update full name"
          />
          <LabelInput
            name="email"
            control={control}
            label="Email"
            placeholder="Update email"
            leftIcon={
              <EmailIcon
                className="absolute left-2.5"
                fill={COLORS.primaryBlue[400]}
              />
            }
          />
        </View>
        <Button twClassName="absolute bottom-2 left-[10%] right-[10%] w-[80%] flex justify-center items-center ">
          <Typography fw="medium" twClassName="text-white">
            Save
          </Typography>
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
