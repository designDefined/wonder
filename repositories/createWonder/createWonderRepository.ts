import { User } from "../../entities/User/User";
import { WonderEvent } from "../../entities/WonderEvent/WonderEvent";

export type CreateWonderRequest = {
  creator: User;
  title: string;
  content: string;
  summary: string;
  tag: string[];
};
export type CreateWonderResponse = {
  isSuccess: boolean;
  eventId: number;
};

export const createWonderRequestAdaptor = (
  event: WonderEvent,
): CreateWonderRequest => {
  return {
    creator: { id: 0, username: "" },
    title: event.title,
    content: "",
    summary: event.summary,
    tag: event.tag,
  };
};
