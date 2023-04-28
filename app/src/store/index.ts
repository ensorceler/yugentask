import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key: string, val: string) => {
  try {
    await AsyncStorage.setItem(key, val);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getDataByKey = async (key: string) => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val;
  } catch (err: any) {
    throw new Error(err);
  }
};
