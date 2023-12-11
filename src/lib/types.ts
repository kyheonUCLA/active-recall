import type { ChatCompletion } from "openai/resources";

type ResponseType = ChatCompletion | null;

type UserType = {
  firstname: string,
  lastname: string,
  phone: string,
}

export type { ResponseType, UserType };