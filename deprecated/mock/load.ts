import { useUser } from "../stores/user";
import { sampleUser } from "./user/sample";

export const allMocks = async () => {
  await useUser.getState().loadUser(sampleUser);
};
