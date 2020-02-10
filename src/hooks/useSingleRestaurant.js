import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default initialId => {
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState('');

  const searchSingleRestaurant = async id => {
    try {
      const res = await yelp.get(`/${id}`);
      setRestaurant(res.data);
      setError('');
    } catch (err) {
      setError(err.response.data.error.description);
      setRestaurant(null);
    }
  };

  useEffect(() => {
    searchSingleRestaurant(initialId);
  }, [initialId]);

  return {restaurant, error, searchSingleRestaurant};
};
