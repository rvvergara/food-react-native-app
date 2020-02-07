import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurant from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, error, searchRestaurants] = useRestaurant();

  const filterByPrice = price =>
    restaurants.filter(resto => resto.price === price);

  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={async () => await searchRestaurants(searchTerm)}
      />
      {restaurants.length > 0 && (
        <View>
          <Text>WE have found {restaurants.length} restaurants</Text>
          <RestaurantList
            restaurants={filterByPrice('$')}
            title="Cost Effective"
          />
          <RestaurantList
            restaurants={filterByPrice('$$')}
            title="Bit Pricier"
          />
          <RestaurantList
            restaurants={filterByPrice('$$$')}
            title="Big Spender"
          />
        </View>
      )}
      {error !== '' && <Text>{error}</Text>}
    </View>
  );
};

export default SearchScreen;
