import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({});

const RestaurantScreen = ({navigation}) => {
  return (
    <View>
      <Text>
        This is the details for Restaurant with ID {navigation.state.params.id}
      </Text>
    </View>
  );
};

export default RestaurantScreen;
