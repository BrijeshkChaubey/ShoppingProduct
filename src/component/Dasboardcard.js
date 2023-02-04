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



export const Dashboardcard = ({ ...props }) => {
const data = {
    image: props.Image, title: props.Title,
    brand:props.brand,stock:props.stock,
    discountPercentage:props.discountPercentage,
    category:props.category,thumbnail:props.thumbnail,
    discription: props.description, rating: props.ratings, 
    id: props.id,price:props.Price,
  }

  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false)
  const selector = useSelector(state => state);

 
  const dispatch = useDispatch();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("DetailProducts",{Data:data})} style={styles.root}>
          <Card.Cover
             source={{uri:(props.thumbnail)}}
              style={styles.imageView}
              resizeMode="contain"
            />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
        {props.Title}
        </Text>
        {/* Ratings */}
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
            <TouchableOpacity onPress={() => { dispatch(addtoCartlistAction(data));}}>
                          <Image source={require('../assets/bannerr/Cart.png')} style={{ marginLeft:70,height: 30, width: 30, }} />
                          </TouchableOpacity>
        </View> 
        <Text style={styles.price}>
          from ${props.Price}
        </Text>
      </View>
      






             
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    backgroundColor: 'white',
    height: hp('28%'),
    borderRadius: wp('8%'),
    width: 400,
    marginVertical: 30,
  },

  imageView: {
    flex: 2,
    width: 100, height: 100,
  },
  title: {
    marginTop: hp('4%'),
    marginBottom: hp('1%'),
  },
  rating: {
    marginTop: hp('2%'),
    alignSelf: 'flex-start',
    marginLeft: wp('3%'),
  },
  ratingTxt: {
    color: 'gray',
  },
  star: {
    color: '#FF8C00'
  },
  View2: {
    height: 110,
    width: wp('100%'),
    marginVertical: wp('4%'),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  View1:
  {
    display: 'flex',
    flexDirection: 'row'
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image: {
    flex: 2,
    height: 120,
    
  },
  rightContainer: {
    padding: 8,
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
    marginRight:10
  },
  star: {
    margin: 2,
  },
});

