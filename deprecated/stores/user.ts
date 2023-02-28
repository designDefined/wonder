import create from "zustand";
import { IUser } from "../types/user";
import { ILoadable } from "../types/status";

interface IUserStore extends IUser, ILoadable {
  loadUser: (user: IUser) => void;
}

export const useUser = create<IUserStore>()((set) => ({
  isLoaded: false,
  username: "",
  loadUser: (user) => set({ ...user, isLoaded: true }),
}));
