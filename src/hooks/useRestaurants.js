import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchRestaurants = async term => {
    try {
      const res = await yelp.get(
        `/search?term=${term}&limit=50&location=New+York`,
      );
      setRestaurants(res.data.businesses);
      setError('');
    } catch (err) {
      if (err.response.data.error.field === 'Authorization') {
        setError('Validation Error');
      } else {
        setError(err.response.data.error.description);
      }
      setRestaurants([]);
    }
  };

  useEffect(() => {
    (async () => await searchRestaurants('Jollibee'))();
  }, []);

  return [restaurants, error, searchRestaurants];
};
