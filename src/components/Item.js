import React from 'react';
import { View, Text } from 'react-native';

const Item = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Item;
