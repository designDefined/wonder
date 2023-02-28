import { User } from "./User";

export type UserWithCredentials = User & { password: string };
