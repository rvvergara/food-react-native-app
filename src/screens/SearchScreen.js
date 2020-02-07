import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const styles = StyleSheet.create({});

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        searchRestaurant={() => console.log('SEARCHING', searchTerm)}
      />
    </View>
  );
};

export default SearchScreen;
