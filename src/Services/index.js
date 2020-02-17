import axios from 'axios';
const headers = { 'Content-Type': 'application/json;charset=UTF-8' };
const instance = axios.create({
	baseURL: 'https://api.myjson.com',
	timeout: 90000,
	headers: {
		post: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	}
});

const index = () => {
	return {
		get: async (url, data = {}, config = {}) => {
			return instance.get(url, data, { config: { ...config, ...headers } });
		},
		post: async (url, data = {}, config = {}) => {
			return instance.post(url, data, { config: { ...config, ...headers } });
		},
		put: (url, data = {}, config = {}) => {
			return instance.put(url, data, { config: { ...config, ...headers } });
		},
		patch: (url, data = {}, config = {}) => {
			return instance.patch(url, data, { config: { ...config, ...headers } });
		},
		delete: (url, data = {}, config = {}) => {
			return instance.delete(url, data, { config: { ...config, ...headers } });
		}
	};
};

export default index;
