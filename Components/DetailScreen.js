import React, { useState ,useCallback,useEffect} from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
const DetailScreen=({navigation,route})=>{
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [savedValue,setSavedValue]=useState('')
    const [array, setArray] = useState([])
  
  
//     useEffect(()=>{
//       AsyncStorage.getItem('SavedData').then((res)=>{
//         if(res != null)
//         {
//           setArray(JSON.parse(res))
//         }
//       })
//     },[])
  
//   const gotoNext=()=>{
//     if (name && price) {
//    setName(''); setPrice('');
//    let arr = array;
//   arr.push({name:route.params.item.name, price:route.params.item.price})
//   setArray(arr)
//   AsyncStorage.setItem('SavedData', JSON.stringify(array))
//    navigation.navigate('Cart')
//   }
//   }
const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    
    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=2); //to check the text is more than 4 lines or not
        // console.log(e.nativeEvent);
    },[]);

    return(
        <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1,}}>
<View style={{flex:1,}}>
  
   <View style={{ backgroundColor: '#F5F5F5', height: hp(9), justifyContent: 'center',borderBottomColor:'#3f46ad',borderBottomWidth:2 }}>
                <Text style={{ textAlign: 'center', fontSize: 28, color: '#3f46ad' ,fontWeight:'bold'}}>Details</Text>
            </View>
            <View style={{ borderColor: 'white',  borderRadius: 10, borderWidth: 2 ,margin:wp(4),alignSelf:'center'}}>
                                <Image resizeMode='contain' style={{ width: wp(40), height: hp(30), borderRadius: 10 }} source={{ uri:route.params.item.avatar}}></Image>
                                <View style={{ backgroundColor: '#3f46ad', borderRadius: 10, borderColor: '#3f46ad', borderWidth: 2 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white',textAlign:'center' }}>{route.params.item.name}</Text>
                                </View>
                                <View style={{ backgroundColor: 'black',marginTop:wp(1) ,borderRadius: 10, borderColor: 'black', borderWidth: 2 }}>
                                <Text style={{textAlign:'center',marginLeft:wp(4),fontSize: 15,  width: wp(40), color: 'white' }}>Prices:{route.params.item.price}</Text>
                            </View>
                            </View>
 <View style={{ borderColor: '#E2E5DE',  borderRadius: 10, borderWidth: 2,backgroundColor:' #B2BEB5' }}>
     <Text style={{fontSize:20,fontWeight:'bold',color:'#3f46ad',marginBottom:hp(1)}}>Description</Text>
    <Text
                  onTextLayout={onTextLayout}
                  numberOfLines={textShown ? undefined : 2}
                  style={{ lineHeight: 21 ,color:'black',fontSize:15}}>{route.params.item.description}</Text>
    
                  {
                      lengthMore ? <Text
                      onPress={toggleNumberOfLines}
                      style={{ lineHeight:13 , marginTop: 2 }}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                      :null
                  } 
 
 </View>
<View style={{margin:hp(5)}}></View>
 
</View>
<View style={{alignSelf:'center',bottom:20,position:'absolute',zIndex:1,flexDirection:'row',}}>
     <TouchableOpacity style={{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,marginRight:wp(10)}}>
         <Text style={{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)}}>Wishlist</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=>navigation.navigate('Cart')} style={{borderColor: '#3f46ad',  borderRadius: 10, borderWidth: 2,}}>
         <Text style={{color:'white',fontSize:20,backgroundColor:'#3f46ad',padding:wp(2)}}>Add To Cart</Text>
     </TouchableOpacity>
 </View>
</ScrollView>
    );
}
export default DetailScreen;