import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Restaurant from './Restaurant';

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

const RestaurantList = ({restaurants, title}) => (
  <View style={styles.parent}>
    {restaurants.length > 0 && <Text style={styles.title}>{title}</Text>}
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={restaurants}
      keyExtractor={resto => resto.id}
      renderItem={({item}) => <Restaurant restaurant={item} />}
    />
  </View>
);

export default RestaurantList;
