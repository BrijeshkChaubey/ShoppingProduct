import react, { useEffect } from 'react';
import {View,Text, StyleSheet,Image, FlatList} from 'react-native';
import { Appbar } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { CartCardscreen } from '../component/Cartcard';
import { LikelistCard } from '../component/Likelistcart';
export const Cartscreen=(route)=>{
 
   console.log("Routeof Cartscreen",route.params);
    const selector = useSelector(state => state);
  console.log('selectorin Cartttt', selector);
  data = selector.AddtoCart
  
 
  let Totalprice=0
  data.map((item)=>{
   Totalprice= Totalprice+item.price
   })

    return(
        <View>
            <View style={{ backgroundColor: 'lightgray' }}>
        <Appbar.Header style={style.header}>
          <Appbar.Content title="Cart" style={{ alignSelf: 'center' }} />

        </Appbar.Header>
      </View>
       
           <FlatList
          data={data}
          renderItem={({ item }) => (
            <CartCardscreen
              Title={item.title}
              Image={item.image}
              thumbnail={item.thumbnail}
              ratings={item.rating}
              Price={item.price}
              id={item.id}
               />

          )}
        />
         <Text style={{fontSize: 18}}>
              Subtotal ({data.length} items):{' '}
              <Text style={{color: '#e47911', fontWeight: 'bold'}}>
                ${Totalprice.toFixed(2)}
              </Text>
              </Text>
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