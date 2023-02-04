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



export const LikelistCard = ({ ...props }) => {

  const data = {
    image: props.Image, title: props.Title,
    discription1: props.Description1, discription2: props.Description2, id: props.id
  }

  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false)
  const selector = useSelector(state => state);


  const dispatch = useDispatch();
  return (
    <View style={CardStyl.View2} >
      <Card style={CardStyl.card}>
        <View style={CardStyl.View1}>
          <TouchableOpacity>
            <Card.Cover
              source={{ uri: (props.thumbnail) }}
              style={CardStyl.imageView}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Card.Content>
            <Title style={CardStyl.title}>{props.Title}</Title>
            <View style={CardStyl.View1}>
              <View >
              <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                fractions={2}
                startingValue={props.ratings}
                onFinishRating={props.ratings}
                readonly={true}
              />
            
                <Text>Ratings {props.ratings}</Text>
              </View>

              <View style={{ marginLeft: 100 }}>
                <TouchableOpacity onPress={() => { dispatch(removefromwishlistAction(data.id)); Changecolor() }}>
                  <Image source={require('../assets/bannerr/bin.png')} style={{ height: 30, width: 30, }} />
                </TouchableOpacity>
              </View>
            </View>
          </Card.Content>
        </View>
        <View>


        </View>
      </Card>
    </View>

  );
};

const CardStyl = StyleSheet.create({
  card: {
    paddingLeft: 10,
    backgroundColor: 'white',
    height: hp('28%'),
    borderRadius: wp('8%'),
    width: 400,
    marginVertical: 30,
  },

  imageView: {
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
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    marginRight: 10
  },
  star: {
    margin: 2,
  },

});