import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import useSingleRestaurant from '../hooks/useSingleRestaurant';
import Restaurant from '../components/Restaurant';

const styles = StyleSheet.create({});

const RestaurantScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const {restaurant, error} = useSingleRestaurant(id);
  return (
    <View>
      {restaurant ? (
        <Restaurant restaurant={restaurant} />
      ) : (
        <Text>{error}</Text>
      )}
    </View>
  );
};

export default RestaurantScreen;
