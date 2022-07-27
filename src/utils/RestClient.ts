import axios from 'axios';

export type RequestCustomParams = {
	params?: {[key: string]: any}
	responseType?: RESPONSE_TYPE,
}

export enum RESPONSE_TYPE {
	TEXT = 'text',
	JSON = 'json',
	BLOB = 'blob',
}

/**
* RestClient class used for supporting calling the API to the server. It's the simplified version with various 
* config being removed from the practical project.
*/
export class RestClient {

	public static get<T>(url: string, config?: RequestCustomParams): Promise<T> {
		return axios.get(url, config);
	}

	public static post<T, TData = any>(url: string, data?: TData, config?: RequestCustomParams): Promise<T> {
		return axios.post(url, data, config);
	}

	public static put<T, TData = any>(url: string, data: TData, config?: RequestCustomParams): Promise<T> {
		return axios.put(url, data, config);
	}

	public static patch<T, TData = any>(url: string, data: TData, config?: RequestCustomParams): Promise<T> {
		return axios.patch(url, data, config)
	}

	public static delete<T, TData = any>(url: string, data: TData, config?: RequestCustomParams): Promise<T> {
		return axios.delete(url, config)
	}
}