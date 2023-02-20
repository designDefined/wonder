import { baseURL } from "../../repositories/baseURL";
import {
  createWonderRequestAdaptor,
  CreateWonderResponse,
} from "../../repositories/createWonder/createWonderRepository";
import { WonderEvent } from "../../entities/WonderEvent/WonderEvent";

export const postCreateWonder = async (
  event: WonderEvent,
): Promise<CreateWonderResponse> => {
  const requestBody = createWonderRequestAdaptor(event);
  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      body: JSON.stringify(requestBody),
    });
    const data = response.json();
    return Promise.resolve({ isSuccess: false, eventId: 0 });
  } catch (e) {
    return Promise.reject(e);
  }
};
