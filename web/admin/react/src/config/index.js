const prodApiBaseUrl = 'http://191.252.201.155:2000/';
const devApiBaseUrl = 'http://localhost:2000';

const config = {
	apiBaseUrl:
		process.env.NODE_ENV === 'production' ? prodApiBaseUrl : devApiBaseUrl
};

export default config;
