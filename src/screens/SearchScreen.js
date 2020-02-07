import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurant from '../hooks/useRestaurants';

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, error, searchRestaurants] = useRestaurant();
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={async () => await searchRestaurants(searchTerm)}
      />
      {restaurants.length > 0 && (
        <Text>WE have found {restaurants.length} restaurants</Text>
      )}
      {error !== '' && <Text>{error}</Text>}
    </View>
  );
};

export default SearchScreen;
