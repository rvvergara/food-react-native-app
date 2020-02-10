import React from 'react';
import {Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const styles = StyleSheet.create({
  parent: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

const ResultItem = ({restaurant, navigation}) => {
  const {image_url, name, rating, review_count} = restaurant;

  return (
    <TouchableOpacity
      style={styles.parent}
      onPress={() => navigation.navigate('Restaurant', {id: restaurant.id})}>
      <Image source={{uri: image_url}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} reviews
      </Text>
    </TouchableOpacity>
  );
};

export default withNavigation(ResultItem);
