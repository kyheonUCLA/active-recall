class ChatGPT {
  private url: string;
  private model: string;
  private temperature: number;
  private max_tokens: number;
  private top_p: number;
  private frequency_penalty: number;
  private presence_penalty: number;
  private apiKey: string | undefined;

  constructor() {
    this.url = "https://api.openai.com/v1";
		this.model = "text-davinci-003";
		this.temperature = 0.9;
		this.max_tokens = 2048;
		this.top_p = 0;
		this.frequency_penalty = 0;
		this.presence_penalty = 0;
		this.apiKey = process.env.OPENAI_API_KEY;
  }

  async getCompletion(prompt: string): Promise<string> {
		const path = `${this.url}/completions`;
		const response = await fetch(`${path}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${this.apiKey}`,
			},
			body: JSON.stringify({
				model: this.model,
				prompt: prompt,
				temperature: this.temperature,
				max_tokens: this.max_tokens,
				top_p: this.top_p,
				frequency_penalty: this.frequency_penalty,
				presence_penalty: this.presence_penalty,
			}),
		});
		try {
			const data = await response.json();
			return data.choices[0].text;
		} catch (error) {
			throw new Error(`error in getCompletion: ${error}`);
		}
	}
}

const getCompletion = async (prompt: string): Promise<string> => {
	const url = "https://api.openai.com/v1";
	const model = "text-davinci-003";
	const temperature = 0.9;
	const max_tokens = 2048;
	const top_p = 0;
	const frequency_penalty = 0;
	const presence_penalty = 0;
	const apiKey = process.env.OPENAI_API_KEY;

	const path = `${url}/completions`;
	const response = await fetch(`${path}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify({
			model,
			prompt,
			temperature,
			max_tokens,
			top_p,
			frequency_penalty,
			presence_penalty,
		}),
	});
	try {
		const data = await response.json();
		return data.choices[0].text;
	} catch (error) {
		throw new Error(`error in getCompletion: ${error}`);
	}
}


export default ChatGPT;
export { getCompletion }

