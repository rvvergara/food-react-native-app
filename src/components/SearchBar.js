import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#f0eeee',
    height: 50,
    margin: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#f0eeee',
    borderRadius: 10,
  },
});

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View style={styles.parentContainer}>
      <Icon name="search" size={30} />
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={val => setSearchTerm(val)}
        placeholder="Search"
      />
    </View>
  );
};

export default SearchBar;
