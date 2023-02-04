import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList,Image } from "react-native";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addtoCartlistAction, addtoDataAction } from "../redux/action/action";
import { Appbar } from 'react-native-paper';
import { Dashboardcard, Dashboardcardscreen } from "../component/Dasboardcard";



export const Dashboardscreen = () => {
  const selector = useSelector(state => state);
  console.log('selectorin Dashboard', selector);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductApi()
  }, [])
  data = selector.Datalist[0]
  console.log("Productdata==", data);

  const ProductApi = () => {
    axios.get('https://dummyjson.com/products').then((res) => {
      console.log("Response Data==>", res.data.products);
      dispatch(addtoDataAction(res.data.products))
    }).catch((err) => {
      console.log(err);

    })
  }

  return (
  
    <View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <Appbar.Header style={style.header}>
          <Appbar.Content title="Home" style={{ alignSelf: 'center' }} />

        </Appbar.Header>
      </View>
    <View >
      <FlatList
        data={data ? data : null}
        renderItem={({ item }) => (
          <Dashboardcard
            Title={item.title}
            Image={item.images}
            ratings={item.rating}
            Price={item.price}
            id={item.id}
            description={item.description}
            brand={item.brand}
            stock={item.stock}
            discountPercentage={item.discountPercentage}
            category={item.category}
            thumbnail={item.thumbnail}
          />

        )}
      />
    </View>
    </View>
  )
}
const style = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: '1%',
    backgroundColor: 'lightblue',
  },
})


