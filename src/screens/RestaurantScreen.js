import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import useSingleRestaurant from '../hooks/useSingleRestaurant';

const styles = StyleSheet.create({});

const RestaurantScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {restaurant, error} = useSingleRestaurant(id);

  return (
    <View>
      <Text>This is the details for {restaurant.name}</Text>
      {error ? <Text>{error}</Text> : null}
      <Image source={{uri: restaurant.image_url}} width={250} height={100} />
    </View>
  );
};

export default RestaurantScreen;
