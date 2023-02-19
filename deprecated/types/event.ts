export interface IEventSummary {
  id: number;
  writer: string; // to be changed
  title: string;
  src: string;
  time: string;
}

export interface IEventPost extends IEventSummary {}
