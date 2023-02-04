
import React, { useState, useCallback } from 'react';
import {
    View,
    ScrollView,
    Text,
    Image,
    FlatList,
    StyleSheet,
    useWindowDimensions,
    Button,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Carosalimagescreen } from '../component/carolelimage';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addtoCartlistAction, addtowhishlistAction } from '../redux/action/action';
import { QuantitySelector } from '../component/QuantitySelector';
import { useNavigation } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { Rating } from 'react-native-ratings';

export const ProdctDetailscreen = (...props) => {
    const navigation = useNavigation();
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch();
    const data = props[0].route.params.Data
    const image = data.image
    return (
        <View>
            <View style={{ backgroundColor: 'lightgray' }}>
                <Appbar.Header style={styles.header}>
                    <TouchableOpacity>
                    <Ionicons name='arrow-back' size={28} onPress={() => navigation.goBack()}/>
                    </TouchableOpacity>
                    
                    <Appbar.Content title={data.title} style={{ alignSelf: 'center' }} />
                </Appbar.Header>
            </View>
            <ImageBackground source={require('../assets/bannerr/Whiteb.jpg')} style={{ height: 1000 }}>
                <ScrollView style={styles.root}>
            <Carosalimagescreen images={image} />
            <Text  style={styles.price}>{data.title}  </Text>
            <Text style={styles.fonty}>category :{data.category}</Text>
            <Text  style={styles.price}> Brand:{data.brand}</Text>
            <View style={styles.ratingsContainer}>
            <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                fractions={2}
                startingValue={data.rating}
                onFinishRating={data.rating}
                readonly={true}
              />
                        <Text style={{color:'green'}}>{data.rating}</Text>
                    </View>

                    <Text style={styles.price}>
                 from ${data.price}
              {data.price && (
             <Text style={styles.oldPrice}> {data.discountPercentage}% off</Text>
              )}
      </Text>
                    <Text style={styles.description}>{data.discription}</Text>
      <Text style={{color:'green'}}> In Stock {data.stock } products are available</Text>

                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' }}>
                            <TouchableOpacity onPress={() => { dispatch(addtoCartlistAction(data)); }} style={styles.button}>
                                <Fontisto name='shopping-basket-add' size={22} color='brown' />
                                <Text style={styles.price}>  Cart</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { dispatch(addtowhishlistAction(data)); }} style={styles.button}>
                                <Fontisto name='favorite' size={20} color='red'  />
                                <Text style={styles.price}>favorite</Text>
                            </TouchableOpacity>
                        </View>
                        </View>



                </ScrollView>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
        padding: 6,

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
       
    },
    title: {},
    description: {
        marginVertical: 10,
        lineHeight: 20,
        fontSize:18
    },
    fonty: {
        marginVertical: 10,
        fontWeight:'bold',
        fontSize:15
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
    header: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: '1%',
        backgroundColor: 'lightblue',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 3,
        width:192,
        backgroundColor:'#e6e6fa',
        margin:2

       
      },
});