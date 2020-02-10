import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default initialId => {
  const [restaurant, setRestaurant] = useState({});
  const [error, setError] = useState('');

  const searchSingleRestaurant = async id => {
    try {
      const res = await yelp.get(`/${id}`);
      setRestaurant(res.data);
      setError('');
    } catch (err) {
      setError(err.response.data.error.description);
      setRestaurant({});
    }
  };

  useEffect(() => {
    searchSingleRestaurant(initialId);
  }, [initialId]);

  return {restaurant, error, searchSingleRestaurant};
};
