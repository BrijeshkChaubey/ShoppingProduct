import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addtoQtyAction } from '../redux/action/action';

export const QuantitySelector = ({quantity, setQuantity}) => {
 const dispatch=useDispatch()
  const onMinus = () => {
    setQuantity(Math.max(0, quantity - 1));
  };
  const selector=useSelector(state=>state)
  const onPlus = () => {
    dispatch(addtoQtyAction())
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.butonText}>-</Text>
      </Pressable>

      <Text style={styles.quantity}>{quantity}</Text>

      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.butonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e3e3e3',
    width: 130,
  },
  button: {
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d1d1d1',
  },
  butonText: {
    fontSize: 18,
  },
  quantity: {
    color: '#007eb9',
  },
});

