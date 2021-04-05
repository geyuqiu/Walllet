import crossFetch from "cross-fetch";

const fetch = crossFetch;

export class HttpClient {
	async get(url: string): Promise<any> {
		const response = await fetch(url)
			.then((resp) => resp.json())
			.then((data) => data)
			.catch((error) => {
				console.error(error);
			});

		return response;
	}
}

export const httpClient = new HttpClient();
