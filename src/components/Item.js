import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  Image,
} from 'react-native';

const handleAdd = () => {
  console.log('added to cart');
};

const Item = ({ title }) => {
  return (
    <SafeAreaView>
      <View style={styles.item}>
        <Image
          style={styles.image}
          source={require('../../images/pasta.jpg')}
        />
        <Text>{title}</Text>
        <Button title="+ 1" onPress={() => handleAdd()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    height: 40,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    margin: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Item;
