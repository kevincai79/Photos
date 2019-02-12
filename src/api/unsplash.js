import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 445bc178217f684f7a263c83440946774942db17ba385151f28fb3c2aeb5478f'
  }
});
