import type { ChatCompletion } from "openai/resources";

type ResponseType = ChatCompletion | null;

type UserType = {
  firstname: string,
  lastname: string,
  phone: string,
}

type MessageType = {
  selection: Selection,
  text: string,
  tab?: chrome.tabs.Tab,
  gpt?: ResponseType,
}


export type { ResponseType, UserType, MessageType };