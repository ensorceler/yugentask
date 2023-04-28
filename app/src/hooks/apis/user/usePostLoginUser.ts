import { useMutation } from "@tanstack/react-query";
import { postApi } from "../../utils/apiRequestUtils";

const loginUser = async (body: Object) => {
  const response = await postApi(`auth/login`, body);
  return response;
};

export default function usePostLoginUser() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (userData: Object) => loginUser(userData),
  });
}
