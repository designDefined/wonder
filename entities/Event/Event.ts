import { User } from "../User";
import { EventTag } from "./EventTag";
import { EventTime } from "./EventTime";
import { EventLocation } from "./EventLocation";
import { EventReservation } from "./EventReservation";
import { EventContent } from "./EventContent";
import { EventThumbnails } from "./EventThumbnails";

export type Event = {
  id: number;
  creator: User;
  title: string;
  summary: string;
  thumbnail: EventThumbnails;
  content: EventContent;
  tag: EventTag;
  time: EventTime;
  location: EventLocation;
  reservation: EventReservation;
};
