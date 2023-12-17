import { getCompletion } from "../lib/api";

// this is actually retarded, why can't i just declare the lambda function as async in the event listener
const sendCompletionResponse = async (data: any, sendResponse: (response?: any) => void) => {
  const prompt = `summarize "${data.context}" into 3 sentences emphasizing the section: ${data.text}`;
  const completion = await getCompletion(prompt);
  console.log(completion?.choices[0].message.content)

  sendResponse({
    data: {...data, completion: completion?.choices[0].message.content},
    error: {message: "no errors" }
  })
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendCompletionResponse(request, sendResponse);
  return true;
})
  

export {}