import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  authToken: string;
  authenticated: boolean;
  setAuthToken: (x: string) => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      authToken: "0",
      authenticated: false,
      setAuthToken: (token: string) =>
        set({ authToken: token, authenticated: true }),
    }),
    {
      name: "AuthToken",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useAuthStore;
