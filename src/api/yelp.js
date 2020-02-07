import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer 4gb2HNGeDY0tY70-lomFOAK6MB371hEJCstFiHcjAImxqwqZPAkJXeCPZjOMRXBC7rTpqXc5BWkiHLMPBgxT0VCqXjGoDo3DHYdiuT6-UZBdYeZh5x8kjp1XOVc6XnYx',,
  },
});
