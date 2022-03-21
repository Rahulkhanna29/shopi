import React, { useState ,useCallback,useEffect} from 'react';
import { StyleSheet, Text, View, Image,ScrollView ,FlatList,} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './StyleSheet';

const Cart=({navigation,route})=>{
    const [savedValue,setSavedValue]=useState([])

    useEffect(()=>{
    AsyncStorage.getItem('SavedData').then((value)=>{
      if(value != null)
      {

        //   console.log('sofa',value)
         
        setSavedValue(JSON.parse(value))
      }
    })
    },[])  

    const [num,setNum]=useState(1);
    const incNum=()=>{
        if(num<10){
            setNum(Number(num)+1);
        }
    };
    const decNum=()=>{
        if(num>0){
            setNum(num-1);
        }
    };

   
    const DATA=[
        {
            title:'Iphone',
            src: require('../assets/iphone.jpg'),
            Prices:' 1,25,400'
        },
        {
            title:'2021 Apple MacBook Pro',
            src: require('../assets/mac.jpg'),
            Prices:' 1,25,400'
        },
      
    ];
  
    return(
        
<View style={{flex:1,}}>
  
  <View style={styles.cartView}>
               <Text style={styles.cartText}>Shopping Cart</Text>
           </View>
           <View style={{flex:1}}>
               <FlatList
            //    data={DATA}
               data={[...savedValue]}
               showsHorizontalScrollIndicator={false}
               renderItem={({item,index})=>{
                   return(
                       <View style={styles.Viewmain}>
                <Image resizeMode='contain' source={{uri:item.avatar}} style={styles.Image}></Image>
                           <View>
                           <Text style={styles.nameTExt}>{item.name}</Text>
                           <Text style={styles.priceText}>Rs {item.price}</Text>
                         <View style={styles.TouchView1}>
                         <TouchableOpacity onPress={incNum} style={styles.Touch1}>
                             <Text style={styles.plusText}>+</Text>
                         </TouchableOpacity>
                       <Text style={styles.num}>{num}</Text>
                         <TouchableOpacity style={styles.Touch2} onPress={decNum}>
                             <Text style={styles.minusText}>-</Text>
                         </TouchableOpacity>
                          </View>
                        </View>
                        </View>
                   )
               }}
               />
           </View>
           <View style={styles.cartView}>
           <View style={styles.ButttonView}>
     <TouchableOpacity style={styles.Buttontouch}>
         <Text style={styles.buttonText}>Checkout</Text>
     </TouchableOpacity>
     
 </View>
 </View>    
           </View>
    )
}
export default Cart;