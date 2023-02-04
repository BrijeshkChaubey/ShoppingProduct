import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, Title } from 'react-native-paper';
import { Rating } from 'react-native-ratings';
import { Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import { addtoCartlistAction, addtowhishlistAction, removefromCartlistAction, removefromwishlistAction } from '../redux/action/action';
import { hp, wp } from '../Style';
import { QuantitySelector } from './QuantitySelector';



export const CartCardscreen= ({ ...props }) => {
  
  const data = {
    image: props.Image, title: props.Title,
    discription1: props.Description1, discription2: props.Description2, id: props.id
  }
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false)
  const [quantity,setQuantity]=useState(props.quantity)
  const selector = useSelector(state => state);

 
  const dispatch = useDispatch();
  return (
    <View style={styles.root}>
      <View style={styles.row}>
      <Card.Cover
             source={{uri:(props.thumbnail)}}
              style={styles.imageView}
              resizeMode="contain"
            />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
          {props.Title}
          </Text>
         
          <View style={styles.ratingsContainer}>
          <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                fractions={2}
                startingValue={props.ratings}
                onFinishRating={props.ratings}
                readonly={true}
              />
            <Text>{props.ratings}</Text>
            <TouchableOpacity onPress={() => { dispatch(removefromCartlistAction(data.id));  }}>
             <Image source={require('../assets/bannerr/bin.png')} style={styles.imag} />
            </TouchableOpacity>
            </View>
          <Text style={styles.price}>
            from ${props.Price}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  quantityContainer: {
    margin: 1,
  },
  imageView: {
        width: 100, height: 100, 
      },
  imag:{
    height: 30,
     width: 30,
     marginLeft:80 
  }
});