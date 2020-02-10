import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const RestaurantScreen = props => {
  const {id} = props;
  return (
    <View>
      <Text>This is the details for Restaurant with ID {id}</Text>
    </View>
  );
};

export default RestaurantScreen;
