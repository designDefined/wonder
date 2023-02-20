import { baseURL } from "../baseURL";
import { CreateWonderState } from "../../states/createWonder/createWonderState";

export const temporalSaveWonder = async (body: CreateWonderState) => {
  try {
    const response = await fetch(`${baseURL}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const data = response.json();
    return Promise.resolve(data);
  } catch (e) {}
};
