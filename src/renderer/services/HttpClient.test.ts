import nock from "nock";

import { HttpClient } from "./HttpClient";

describe("HttpClient", () => {
	let httpClient: HttpClient;

	beforeAll(() => {
		nock.disableNetConnect();

		httpClient = new HttpClient();
	});

	it("should get without params", async () => {
		const responseBody = {
			args: {},
			origin: "origin",
			url: "http://httpbin.org/get",
		};

		nock("http://httpbin.org/").get("/get").reply(200, responseBody);

		const response = await httpClient.get("http://httpbin.org/get");

		expect(response).toEqual(responseBody);
	});
});
