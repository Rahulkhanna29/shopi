import React, { useState ,useCallback,useEffect} from 'react';
import { StyleSheet, Text, View, Image,ScrollView ,FlatList,} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart=({navigation,route})=>{
    const [savedValue,setSavedValue]=useState([])

    useEffect(()=>{
    AsyncStorage.getItem('SavedData').then((res)=>{
      if(res != null)
      {
        setSavedValue(JSON.parse(res))
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
  
  <View style={{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 }}>
               <Text style={{ textAlign: 'center', fontSize: 28, color: '#3f46ad' ,fontWeight:'bold'}}>Shopping Cart</Text>
           </View>
           <View>
               <FlatList
               data={DATA}
            //    data={[...savedValue]}
               showsHorizontalScrollIndicator={false}
               renderItem={({item,index})=>{
                   return(
                       <View style={{flexDirection:'row',margin:wp(2),}}>
                <Image resizeMode='contain' source={item.src} style={{width:wp(30),height:hp(20)}}></Image>
                           <View>
                           <Text style={{fontSize:20,fontWeight:'bold',color:'#3f46ad',marginLeft:wp(3),marginTop:hp(1),width:wp(100)}}>{item.title}</Text>
                           <Text style={{fontSize:20,fontWeight:'bold',color:'black',marginLeft:wp(3),marginTop:hp(1),width:wp(100)}}>Rs{item.Prices}</Text>
                         <View style={{flexDirection:'row',margin:wp(2)}}>
                         <TouchableOpacity onPress={incNum} style={{backgroundColor:'#3f46ad',borderRadius:20,marginRight:wp(3)}}>
                             <Text style={{color:'white',margin:wp(2)}}>+</Text>
                         </TouchableOpacity>
                       <Text style={{fontSize:20,color:'black',marginRight:wp(3)}}>{num}</Text>
                         <TouchableOpacity style={{backgroundColor:'#3f46ad',borderRadius:20,}} onPress={decNum}>
                             <Text style={{color:'white',margin:wp(2),}}>-</Text>
                         </TouchableOpacity>
                          </View>
                        </View>
                        </View>
                   )
               }}
               />
           </View>
          
           <View style={{alignSelf:'center',bottom:20,position:'absolute',zIndex:1,}}>
     <TouchableOpacity style={{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,}}>
         <Text style={{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)}}>Checkout</Text>
     </TouchableOpacity>
     
 </View>
            {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',textAlign:'center' }}>{route.params.item.name}</Text> */}
           </View>
    )
}
export default Cart;