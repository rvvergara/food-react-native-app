import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurant from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [restaurants, error, searchRestaurants] = useRestaurant();

  const filterByPrice = price =>
    restaurants.filter(resto => resto.price === price);

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onTermSubmit={async () => await searchRestaurants(searchTerm)}
      />
      {restaurants.length > 0 && (
        <>
          <ScrollView>
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
          </ScrollView>
        </>
      )}
      {error !== '' && <Text>{error}</Text>}
    </>
  );
};

export default SearchScreen;
