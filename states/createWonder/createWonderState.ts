import { WonderEvent } from "../../entities/WonderEvent/WonderEvent";

export type CreateWonderState = {
  title: string;
  summary: string;
  tags: string[];
  content: string;
  time: any[];
  location: any;
  thumbnails: any[];
  reservationMandatory: {
    getName: boolean;
    getPhoneNumber: boolean;
    getEmail: boolean;
  };
} & {
  isDateModalOpened: boolean;
};

export const createWonderAdaptor = (): CreateWonderState => {
  const initialEntityState = {
    title: "",
    summary: "",
    tags: [],
    content: "",
    time: [],
    location: null,
    thumbnails: [],
    reservationMandatory: {
      getName: false,
      getPhoneNumber: false,
      getEmail: false,
    },
  };
  const initialInternalState = { isDateModalOpened: false };
  return { ...initialEntityState, ...initialInternalState };
};

export const createWonderExtractor: (
  state: CreateWonderState,
) => WonderEvent = (state) => {
  return {
    title: state.title,
    summary: state.summary,
    content: state.content,
    tag: state.tags,
    time: state.time,
    location: state.location,
    thumbnail: state.thumbnails,
  } as WonderEvent;
};
