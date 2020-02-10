import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultItem from './ResultItem';

const styles = StyleSheet.create({
  parent: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

const RestaurantList = ({restaurants, title, navigation}) => (
  <View style={styles.parent}>
    {restaurants.length > 0 && <Text style={styles.title}>{title}</Text>}
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={resto => resto.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant')}>
          <ResultItem restaurant={item} />
        </TouchableOpacity>
      )}
    />
  </View>
);

export default RestaurantList;
