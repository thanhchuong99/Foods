import { appEnv } from './env';

class AppSessionStorage implements SessionStorage {
  // store key/value pair
  async set(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
  }

  async get(key: string): Promise<string> {
    const value = localStorage.getItem(key);

    return value || '';
  }

  async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

export const sessionStorage = new AppSessionStorage();
export const config: ApiConfiguration = {
  baseUrl: appEnv.baseUrl,
  authSessionKey: 'oauth_token',
  session: sessionStorage,
  socketUrl: appEnv.socketUrl,
  apiKey: '123456',
};

const client = createApiClient(config);
const socket = createSocketApiClient(config);
const api = new Api(client, socket);
export default api;
