/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Item = ({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

class Mains extends React.Component {
  constructor() {
    super();
    this.state = {
      mains: [],
    };
  }

  componentDidMount() {
    fetch('https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json')
      .then(res => res.json())
      .then(suc => {
        this.setState(prevState => {
          const mains = [...prevState.mains];
          suc.digestData.mains.forEach((main, id) => {
            mains.push({ id: String(id), name: main.name });
          });
          return {
            mains: mains,
          };
        });
      });
  }

  render() {

    return (
      <>
        <SafeAreaView>
          <View style={styles.separator} />
          <View style={styles.fixToText}>
            <Button
              title="Log Out"
              onPress={() => Alert.alert('Left button pressed')}
            />
            <Button
              title="View Cart"
              onPress={() => Alert.alert('Right button pressed')}
            />
          </View>
          <View style={styles.separator} />
          <FlatList
            data={this.state.mains}
            renderItem={({ item }) => <Item title={item.name} />}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
  },
});

export default Mains;
