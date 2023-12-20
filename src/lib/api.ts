import OpenAI from "openai";
import type { ResponseType } from "./types";
// import { config } from "dotenv";
// config();

const apiKey = "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";
const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });

async function getCompletion(prompt: string) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  return completion as ResponseType;
}


export { getCompletion }