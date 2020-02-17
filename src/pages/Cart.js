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
        <View style={styles.fixToText}>
          <Button title="Log Out" onPress={() => handleLogout()} />
          <Button title="Back to Mains" onPress={() => handleMains()} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Cart;
