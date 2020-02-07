import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

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

const Restaurant = ({restaurant}) => {
  const {image_url, name, rating, review_count} = restaurant;
  return (
    <View style={styles.parent}>
      <Image source={{uri: image_url}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>
        {rating} Stars, {review_count} reviews
      </Text>
    </View>
  );
};

export default Restaurant;
