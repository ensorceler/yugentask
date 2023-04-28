import { Modal, Pressable } from "react-native";
import { View } from "react-native";
import { Typography } from "../atoms";
interface Props {
  closeDialog: () => void;
}
const DialogModal = ({ closeDialog }: Props) => {
  return (
    <Modal transparent={true} visible={true}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white rounded-xl w-72 ">
          <View className="flex items-center p-5">
            <Typography fw="medium" twClassName="text-lg">
              Are you sure want to remove?
            </Typography>
            <Typography fw="regular" twClassName="text-greyScale-600">
              If you remove this workspace, you can’t see anything again.
            </Typography>
          </View>

          <View className="flex flex-row items-center">
            <Pressable
              onPress={closeDialog}
              className="flex-1 w-fit bg-transparent flex justify-center items-center border-t border-r border-greyScale-200 p-3"
            >
              <Typography fw="regular">Cancel</Typography>
            </Pressable>
            <Pressable className="flex-1 w-fit bg-transparent flex justify-center items-center border-t p-3 border-greyScale-200">
              <Typography fw="regular" twClassName="text-rose-500">
                Remove
              </Typography>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DialogModal;
