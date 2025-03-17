import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";

export const useCourseChatOnline = (userId: string) => {
  // implement way to send that user is online

  const dispatch: AppDispatch = useDispatch();

  //   for users online
  // dispatch(onOnline({id:userId}))
};
