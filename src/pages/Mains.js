/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Button, StyleSheet, Alert } from 'react-native';
import { useHistory } from 'react-router-dom';
import Item from '../components/Item';

const Mains = () => {
  const [things, setThings] = useState([]);
  const history = useHistory();


  useEffect(() => {
    fetch('https://s3.amazonaws.com/staginggooduncledigests/products_istcki0x000h28d97a9rv9jp.json')
      .then(res => res.json())
      .then(suc => {
        console.log('fetching');
        const myThings = [...things];
        suc.digestData.mains.forEach((main, id) => {
          myThings.push({ id: String(id), name: main.name });
        });
        setThings(myThings);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout = () => {
    console.log('in handle logout');
    history.push('/login');
  };

  const viewCart = () => {
    history.push('/cart');
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.separator} />
        <View style={styles.fixToText}>
          <Button
            title="Log Out"
            onPress={() => handleLogout()}
          />
          <Button
            title="View Cart"
            onPress={() => viewCart()}
          />
        </View>
        <View style={styles.separator} />
        <FlatList
          data={things}
          renderItem={({ item, id }) => <Item key={`${item.name}${item.id}`} title={item.name} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
};


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
