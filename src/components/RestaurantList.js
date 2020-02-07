import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const RestaurantList = ({restaurants, title}) => (
  <View>
    {restaurants.length > 0 && <Text style={styles.title}>{title}</Text>}
    <FlatList
      horizontal
      data={restaurants}
      keyExtractor={resto => resto.id}
      renderItem={({item}) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  </View>
);

export default RestaurantList;
