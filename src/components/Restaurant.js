import React from 'react';
import {View, Image, Text, StyleSheet, FlatList} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    marginVertical: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    alignSelf: 'center',
  },
});

const Restaurant = ({restaurant}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{restaurant.name}</Text>
      <FlatList
        data={restaurant.categories}
        keyExtractor={resto => resto.alias}
        renderItem={({item}) => <Text>{item.title} </Text>}
        horizontal
      />
      <Text>Images: </Text>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  );
};

export default Restaurant;
