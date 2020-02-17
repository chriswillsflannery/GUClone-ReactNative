import React from 'react';
import { Text, SafeAreaView, View, Button, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-dom';

const Cart = () => {
  const history = useHistory();

  const handleLogout = () => {
    history.push('/login');
  };

  const handleMains = () => {
    history.push('/mains');
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.separator} />
        <View style={styles.fixToText}>
          <Button title="Log Out" onPress={() => handleLogout()} />
          <Button title="Back to Mains" onPress={() => handleMains()} />
        </View>
        <View style={styles.separator} />
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

export default Cart;
