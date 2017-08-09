import axios from 'axios';
import config from '../../config';
import Client from './client';

const bridgeClient = new Client({
  baseURL: config.app.BRIDGE_URL,
  bridgeURL: config.app.BRIDGE_URL,
  httpClient: axios
});

console.log('config.app is: ', config.app);

export default bridgeClient;
