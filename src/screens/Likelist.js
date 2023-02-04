// import react from 'react';
// import {View,Text} from 'react-native';
// export const Likescreen=()=>{
//     return(
//         <View>
//             <Text>
//             Likescreen 
//             </Text>
//         </View>
//     )
// }
import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CartCardComponent } from '../components/NearbyCard';
import { useSelector, useDispatch } from 'react-redux';
import { Appbar } from 'react-native-paper';
import { removefromwishlistAction } from '../redux/action/action';
import { LikelistCard } from '../component/Likelistcart';


export const Likescreen = () => {
  const selector = useSelector(state => state);
  console.log('selectorin Wishlist', selector);

  data = selector.cardata
  return (

    <View>
      <View style={{ backgroundColor: 'lightgray' }}>
        <Appbar.Header style={style.header}>
          <Appbar.Content title="Fovourite" style={{ alignSelf: 'center' }} />

        </Appbar.Header>
      </View>
      <View>
       
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <LikelistCard
              Title={item.title}
              Image={item.image}
              ratings={item.rating}
              id={item.id}
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
