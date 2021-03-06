import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: '#f0eeee',
    height: 50,
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  searchInput: {
    fontSize: 18,
    flex: 1,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

const SearchBar = ({searchTerm, setSearchTerm, onTermSubmit}) => {
  return (
    <View style={styles.parentContainer}>
      <Icon name="search" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={val => setSearchTerm(val)}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;
