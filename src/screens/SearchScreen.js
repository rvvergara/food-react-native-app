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

const SearchScreen = ({navigation}) => {
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
              navigation={navigation}
            />
            <RestaurantList
              restaurants={filterByPrice('$$')}
              title="Bit Pricier"
              navigation={navigation}
            />
            <RestaurantList
              restaurants={filterByPrice('$$$')}
              title="Big Spender"
              navigation={navigation}
            />
          </ScrollView>
        </>
      )}
      {error !== '' && <Text>{error}</Text>}
    </>
  );
};

export default SearchScreen;
