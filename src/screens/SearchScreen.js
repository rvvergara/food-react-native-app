import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState('');

  const searchRestaurants = async () => {
    try {
      const res = await yelp.get(
        `/search?term=${searchTerm}&limit=50&location=Manila`,
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

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={searchRestaurants}
      />
      {restaurants.length > 0 && (
        <Text>WE have found {restaurants.length} restaurants</Text>
      )}
      {error !== '' && <Text>{error}</Text>}
    </View>
  );
};

export default SearchScreen;
