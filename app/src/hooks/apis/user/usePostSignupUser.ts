import { useMutation } from "@tanstack/react-query";
import { postApi } from "../../utils/apiRequestUtils";

const signupUser = async (body: Object) => {
  const response = await postApi(`auth/signup`, body);
  return response;
};

export default function usePostSignupUser() {
  return useMutation({
    mutationKey: [""],
    mutationFn: (userData: Object) => signupUser(userData),
  });
}
